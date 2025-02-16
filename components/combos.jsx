import { Combos } from "@/config/homepage";
import BlurImage from "./blur-image";

export async function PillowCombos() {
  const images = await Combos();
  return (
    <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-5">
      {images.resources.map((image) => (
        <div key={image.asset_id}>
          <BlurImage image={image} />
        </div>
      ))}
    </div>
  );
}
