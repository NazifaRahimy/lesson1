import { Metadata } from "next";
import NotFundAbout from "../../not-found";
interface ProductIdProps {
  params: { ProductId: string };
}

export const generateMetadata =({params}: ProductIdProps):Metadata=> {
   return {
    title : `product ${params.ProductId}`
   }
}



const ProductId = ({ params }: ProductIdProps) => {
  const { ProductId } = params;
  if(parseInt(ProductId) > 50 ){
     return NotFundAbout()
  }

  return (
    <div className="w-full h-[400px] p-10 grid place-items-center">
         <h1 className="text-2xl font-bold mb-4">صفحه محصول</h1>
      <div className="border-2 border-dashed border-gray-500 p-10 rounded-xl text-center">
       
        <p className="text-lg">آیدی محصول: {ProductId}</p>
      </div>
    </div>
  );
};

export default ProductId;
