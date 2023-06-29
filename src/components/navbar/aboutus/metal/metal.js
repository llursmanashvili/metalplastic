import Carousel from "react-bootstrap/Carousel";
import ml from "./photos/ml2.jpg";
import ml1 from "./photos/ml8.jpg";
import ml2 from "./photos/ml9.jpg";
import ml3 from "./photos/ml11.jpg";
import "./metal.css";
import { useEffect } from "react";

function Metal() {
  const photos = [
    { id: 2, image: ml1 },
    { id: 3, image: ml2 },
    { id: 4, image: ml3 },
    { id: 1, image: ml },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="photosbanner">
        <Carousel>
          {photos.map((photo, i) => {
            return (
              <Carousel.Item key={i}>
                <img
                  key={i}
                  className="firstphoto"
                  src={photo.image}
                  alt="First slide"
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
      <h2>
        საუკეთესო და მოწინავე – მარტივად ასე შეიძლება დახასიათდეს ალუმინის
        პროფილისგან დამზადებული კონსტრუქციები. უფრო დეტალურად კი ალუმინის
        უნიკალური თვისებების გათვალისწინებით და თანამედროვე ტექნოლოგიების
        გამოყენებით ბაზარზე წარმოდგენილია ალუმინის პროფილების დიდი არჩევანი. რაც
        შეეხება კარ ფანჯრის კონსტრუქციებს, აქ პროფილები იყოფა 2 კატეგორიად: ცივი
        ალუმინი და იზო-ალუმინი (თერმო ალუმინი). ცივი ალუმინი წარმოადგენს
        ალუმინის პროფილს, რომელიც განკუთვნილია სხვადასხვა ტიპის კარ-ფანჯრის
        დასამზადებლად. ამ შემთხვევაში ალუმინის პროფილს არ გააჩნია თერმო ბარიერი
        და მისი თბოდანაკარგი საკმაოდ შესამჩნევია. ამის მიუხედავად ასეთი
        პროფილები ფართოდ გამოიყენება ისეთ კონსტრუქციებში სადაც თბო იზოლაცია არ
        წარმოადგენს კრიტიკულ პარამეტრს. იზო-ალუმინი წარმოადგენს ალუმინის
        პროფილს, რომელსაც გააჩნია თერმო ბარიერი, პლასტმასის ხიდის სახით. ასეთი
        პროფილის თერმოსაიზოლაციო თვისებები უტოლდება მეტალო-პლასტმასის პროფილის
        თვისებებს. გარდა თერმოსაიზოლაციო თვისებებისა, ალუმინის პროფილები
        განსხვავდება მასალის სისქითაც. ბაზარზე წარმოდგენილია 1მმ. – 1,2მმ. –
        1,4მმ. – 2მმ. სისქის მქონე პროფილები. მასალის სპეციფიკიდან გამომდინარე
        მინიმალური სისქის ალუმინის პროფილიც კი უკეთეს სამომხმარებლო თვისებებს
        ავლენს მეტალო-პლასტმასის კონსტრუქციებთან შედარებით.
      </h2>
    </>
  );
}
export default Metal;
