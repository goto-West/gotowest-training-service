import { atom } from "recoil";

//movenet 결과 skeleton data값 담아놀 atom 
export const aDataAtom = atom({
    key:"aData",
    default: [],
});

export const bDataAtom = atom({
    key:"bData",
    default: [],
});

export const cDataAtom = atom({
    key:"cData",
    default: [],
});

export const dDataAtom = atom({
    key:"dData",
    default: [],
});

//angle 계산값 담아놀 atom 
export const aAngleAtom = atom({
    key: "aAngle",
    default: [],
}); 

export const bAngleAtom = atom({
    key: "bAngle",
    default: [],
});

export const cAngleAtom = atom({
    key: "cAngle",
    default: [],
});

export const dAngleAtom = atom({
    key: "dAngle",
    default: [],
});