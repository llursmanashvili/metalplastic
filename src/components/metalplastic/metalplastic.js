import Carousel from "react-bootstrap/Carousel";
import ml from "./photos/ml3.jpg";
import ml1 from "./photos/ml4.jpg";
import ml2 from "./photos/ml5.jpg";
import ml3 from "./photos/ml7.jpeg";
import "./metalplastic.css";
import { useEffect } from "react";

function MetalPlastic() {
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
        ბევრ მომხმარებელს აქვს შეკითხვა, რა განსხვავებაა ჩვეულებრივ ფანჯრებსა და
        მეტალო-პლასტმასის ფანჯრებს შორის? პასუხი საკმაოდ მარტივია.
        მეტალო-პლასტმასის ფანჯრებს აქვს პლასტმასის ჩარჩო, გამაგრებული სპეციალური
        ლითონის ჩასასვლელით, რომელიც ჩადგმულია პროფილში და ემსახურება მთლიანი
        სტრუქტურის საფუძველს. ამ გამაგრების მიზანია ფანჯრის დამატებითი სიმტკიცის
        მიცემა. ეს ძალიან მნიშვნელოვანი ფაქტორია რთული ამინდის პირობებისთვის და
        ასევე მრავალსართულიანი შენობების ზედა სართულებისთვის. კონსტრუქციები
        გამაგრების გარეშე შეიძლება უბრალოდ ვერ გაუძლოს უკიდურესად ძლიერ ქარს. ეს
        ფანჯრები ბევრად უფრო საიმედო და გამძლეა, ამიტომ მათზე მოთხოვნა მუდმივად
        იზრდება. ამ დიზაინს აქვს ჩვეულებრივი PVC ფანჯრების ყველა უპირატესობა,
        ასევე ზემოთ აღწერილი დამატებითი თვისებები. მასალა uPVC ფანჯრების
        დასამზადებლად ასევე არის PVC. ეს პოლიმერი ძალიან მოსახერხებელია, რადგან
        ყველა საჭირო თვისება შეიძლება მიენიჭოს უკვე წარმოების ეტაპზე. PVC არის
        პლასტმასის მასალა, რომელიც იძლევა ნებისმიერი ფორმის ფანჯრების დამზადების
        საშუალებას. გარდა ამისა, ის გამძლეა, არ არის მგრძნობიარე ამინდის მიმართ
        და უვნებელია გარემოსთვის.
      </h2>
    </>
  );
}
export default MetalPlastic;