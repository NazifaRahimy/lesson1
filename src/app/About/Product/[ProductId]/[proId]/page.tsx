import NotFoundNestedId from "./not-found";
import { Metadata } from "next";
interface ProIdProps {
    params: {ProductId: string; proId: string}
}
 export const generateMetadata = ({ params }: ProIdProps): Metadata => {
  return {
    title: `Product ${params.ProductId} - Nested ID ${params.proId}`,
  };
};

const ProId = ({params}: ProIdProps) => {
    const {ProductId} = params;
    const {proId} = params
    
    if(parseInt(proId) > 20){
        return NotFoundNestedId()
    }

    return ( 
    <div className="w-full h-[400px] p-10 grid place-items-center">
        <h1 className="text-2xl font-bold mb-4">صفحه محصول</h1>
        <div className="border-2 border-dashed border-gray-500 p-10 rounded-xl text-center">
       
        <p className="text-lg flex flex-col gap-4">
            <span> آیدی محصول : {ProductId }</span>
            <span>آیدی محصول تو در تو : {proId}</span>
        </p>
      </div>
    </div>
    );
}
 
export default ProId;