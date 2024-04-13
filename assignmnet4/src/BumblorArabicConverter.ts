class BumblorArabicConverter {
    bumblor2arabic(Bumblor: string): number {

        Bumblor;
        return 0;
    }
    arabic2bumblor(arabic: number): string {
        try{
            if (arabic<=-5000 || arabic>=5000){
                throw new RangeError("Out of Range");
            }
        }
        catch (error){
            console.log(error);
        }
        arabic;
        return "";
    }
}
export default BumblorArabicConverter;