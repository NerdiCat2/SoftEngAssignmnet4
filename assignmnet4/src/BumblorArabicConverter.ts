//type Bumblor = string;
export function bumblor2arabic(Bumblor: string): number {
    if (Bumblor=="O"){
        return 0;
    }
    let sign=1;
    if (Bumblor.startsWith("-")){
        Bumblor=Bumblor.slice(1);
        sign=-1;

    }
    let output =0;
    const values: {[key: string]:number} = {"M":1000,"D":500,"C":100,"L":50,"X":10,"V":5,"I":1};
    const regex = /^M{0,4}D{0,1}C{0,4}L{0,1}X{0,4}V{0,1}I{0,4}$/;
    if (!regex.test(Bumblor)){
        throw Error("Malformed Number");
    }
    Array.from(Bumblor).forEach(char =>{
        output+=values[char];
    });
    Bumblor;
    return sign*output;
}

export function arabic2bumblor(arabic: number):string {
    let output =  "";
    if (arabic<-4999 || arabic>4999) {
        throw Error("Out of Range");
    }
    if (arabic==0){
        return "O";
    }
    if (arabic<0){
        arabic=arabic*-1;
        output="-";
    }
    const M=Math.floor(arabic/1000);
    arabic-=1000*M;
    const D =Math.floor(arabic/500);
    arabic-=500*D;
    const C =Math.floor(arabic/100);
    arabic-=100*C;
    const L=Math.floor(arabic/50);
    arabic-=50*L;
    const X =Math.floor(arabic/10);
    arabic-=10*X;
    const V =Math.floor(arabic/5);
    arabic-=5*V;
    const I =Math.floor(arabic);
    arabic-=I;
    output+="M".repeat(M) + "D".repeat(D) + "C".repeat(C) + "L".repeat(L) + "X".repeat(X) + "V".repeat(V) + "I".repeat(I);
    return output;
}