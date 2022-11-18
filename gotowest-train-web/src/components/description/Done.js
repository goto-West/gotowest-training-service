import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { aAngleAtom, aDataAtom, bAngleAtom, bDataAtom, cAngleAtom, cDataAtom, dAngleAtom, dDataAtom } from '../../atoms';
//import classification from "../components/description/classification";


export default function Done() {
    const navigate = useNavigate();
    const onClick = () => {
        navigate("/score");
    };

    const aSkeletonData = useRecoilValue(aDataAtom);
    const bSkeletonData = useRecoilValue(bDataAtom);
    const cSkeletonData = useRecoilValue(cDataAtom);
    const dSkeletonData = useRecoilValue(dDataAtom);

    const aAngleData = useRecoilValue(aAngleAtom);
    const bAngleData = useRecoilValue(bAngleAtom);
    const cAngleData = useRecoilValue(cAngleAtom);
    const dAngleData = useRecoilValue(dAngleAtom);

    const setAAngle = useSetRecoilState(aAngleAtom);
    const setBAngle = useSetRecoilState(bAngleAtom);
    const setCAngle = useSetRecoilState(cAngleAtom);
    const setDAngle = useSetRecoilState(dAngleAtom);

    console.log('Done component 시작');

    function ComputeAngle(a,b,c){
        var aa = Math.sqrt(Math.pow(a.x -c.x,2) + Math.pow(a.y - c.y ,2));
        var bb = Math.sqrt(Math.pow(a.x -b.x,2) + Math.pow(a.y - b.y ,2));
        var cc = Math.sqrt(Math.pow(b.x -c.x,2) + Math.pow(b.y - c.y ,2));
      
        const temp = (Math.pow(bb,2) + Math.pow(cc,2) - Math.pow(aa,2)) / (2*bb*cc);
      
        var ang = Math.acos(temp);
      
        ang = ang * (180/Math.PI);
    
        // log 
        // log.info('angle ' + idx + ':', ang);
        return ang;
      }
  
    // compute angle between three dots
    function getAngle(array){
        //어떤 자세인지 라벨링 설정 : 매개변수로 pose_idx를 받아와 자세의 어떤 부위인지 확인
          let label_idx = ['arm_stretch_up', 'arm_stretch_upper_right', 'hurray',
                'raise_right_leg', 'side_stretch_left_leg',  ' right_side_stretch'];
          
          let angles = { 
          ang1 : '', ang2 : '', ang3 : '', ang4 : '',  
          ang5 : '', ang6 : '', ang7 : '', ang8 : ''
          };
          
          //angle 1 - right elow [8], right shoulder [6], right hip [12]
          angles.ang1 = ComputeAngle(array[8],array[6],array[12]);
        
          //angle 2 - left elow[7], left shoulder[5], left hip[11]                                                                           
          angles.ang2 = ComputeAngle(array[7],array[5],array[11]);
        
          //angle 3 - right shoulder[6], right elow[8], right wrist[10]
          angles.ang3 = ComputeAngle(array[6],array[8],array[10]);
        
          //angle 4 - left shoulder[5], left elow[7], left wrist[9]
          angles.ang4 = ComputeAngle(array[5],array[7],array[9]);
        
          //angle 5 - left hip[11], right hip[12], right knee[14]
          angles.ang5 = ComputeAngle(array[11],array[12],array[14]);
        
          //angle 6 - right hip[12], left hip[11], left knee[13]
          angles.ang6 = ComputeAngle(array[12],array[11],array[13]);
        
          //angle 7 - right hip[12], right knee[14] right ankle[16] 
          angles.ang7 = ComputeAngle(array[12],array[14],array[16]);
        
          //angle 8 - left hip[11], left knee[13], left ankle[15]
          angles.ang8 = ComputeAngle(array[11],array[13],array[15]);
        
          //debug
          //log.info('return result', angles);
          
          return angles; 
    }

    useEffect(()=>{
        const aparts = [];
        const bparts = [];
        const cparts = [];
        const dparts = []; 
    
        for(var i=0; i<aSkeletonData.length; i++){
            const temp = [];
            for(var j=0; j<17; j++){
                const part = {
                    x: Math.trunc(aSkeletonData[i].keypoints[j].position.x),
                    y: Math.trunc(aSkeletonData[i].keypoints[j].position.y)
                };
                temp.push(part);
            }
            aparts.push(temp);
        }
    
        for(var i=0; i<bSkeletonData.length; i++){
            const temp = [];
            for(var j=0; j<17; j++){
                const part = {
                    x: Math.trunc(bSkeletonData[i].keypoints[j].position.x),
                    y: Math.trunc(bSkeletonData[i].keypoints[j].position.y)
                };
                temp.push(part);
            }
            bparts.push(temp);
        }
    
        for(var i=0; i<cSkeletonData.length; i++){
            const temp = [];
            for(var j=0; j<17; j++){
                const part = {
                    x: Math.trunc(cSkeletonData[i].keypoints[j].position.x),
                    y: Math.trunc(cSkeletonData[i].keypoints[j].position.y)
                };
                temp.push(part);
            }
            cparts.push(temp);
        }
    
        for(var i=0; i<dSkeletonData.length; i++){
            const temp = [];
            for(var j=0; j<17; j++){
                const part = {
                    x: Math.trunc(dSkeletonData[i].keypoints[j].position.x),
                    y: Math.trunc(dSkeletonData[i].keypoints[j].position.y)
                };
                temp.push(part);
            }
            dparts.push(temp);
        }

        console.log('parts----------------');
        console.log(aparts);
        console.log(bparts);
        console.log(cparts);
        console.log(dparts);
        
        const afinal = [];
        const bfinal = [];
        const cfinal = [];
        const dfinal = []; 


        // 각 자세 별 각도 추가
        for(var i=0; i<aparts.length; i++){
            const temp = []; 
            for(var j=0; j<8; j++){//angle은 8개 
                temp.push(getAngle(aparts[i]));
            }
            afinal.push(temp);
        }

        for(var i=0; i<bparts.length; i++){
            const temp = []; 
            for(var j=0; j<8; j++){//angle은 8개 
                temp.push(getAngle(bparts[i]));
            }
            bfinal.push(temp);
        }

        for(var i=0; i<cparts.length; i++){
            const temp = []; 
            for(var j=0; j<8; j++){//angle은 8개 
                temp.push(getAngle(cparts[i]));
            }
            cfinal.push(temp);
        }

        for(var i=0; i<dparts.length; i++){
            const temp = []; 
            for(var j=0; j<8; j++){//angle은 8개 
                temp.push(getAngle(dparts[i]));
            }
            dfinal.push(temp);
        }


        // log
        console.log('angle-----------------');
        console.log(afinal);
        console.log(bfinal);
        console.log(cfinal);
        console.log(dfinal);


        /*
        aparts.map(x=>setAAngle(last => [...last, getAngle(x)]));
        bparts.map(x=>setBAngle(last => [...last, getAngle(x)]));
        cparts.map(x=>setCAngle(last => [...last, getAngle(x)]));
        dparts.map(x=>setDAngle(last => [...last, getAngle(x)]));

        console.log('angle atom----------------');
        console.log(aAngleData);
        console.log(bAngleData);
        console.log(cAngleData);
        console.log(dAngleData); 
        */

    },[]);
    

  return (
    <div>
        <div className='cd'>
            <p>오늘의 운동이</p>
            <p>종료되었습니다.</p>
            <p>다음 버튼을 눌러주세요.</p>
        </div>

        <div>
            <button className='startBtn' onClick={onClick}>
                다음
            </button>
        </div>
    </div>
    
  )
}
