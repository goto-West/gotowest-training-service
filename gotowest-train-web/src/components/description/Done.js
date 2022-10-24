import React from 'react'
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { aDataAtom, bDataAtom, cDataAtom, dDataAtom } from '../../atoms';

export default function Done() {
    const navigate = useNavigate();
    const onClick = () => {
        navigate("/score");
    };
    const aSkeletonData = useRecoilValue(aDataAtom);
    const bSkeletonData = useRecoilValue(bDataAtom);
    const cSkeletonData = useRecoilValue(cDataAtom);
    const dSkeletonData = useRecoilValue(dDataAtom);

    console.log('Done component 시작');
    console.log('a');
    console.log(aSkeletonData);
    console.log('d');
    console.log(dSkeletonData); 
    
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
