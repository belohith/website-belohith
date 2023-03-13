import classes from "./UIBasics.css";
import Book from "./Book";
import photo1 from "./images/cover1.jpg";
import photo2 from "./images/cover2.jpg";
import photo3 from "./images/rashmika.jpg";
import photo4 from "./images/renai.png";
import photo5 from "./images/sapota.jpg";

function Book1() {
  const photos = [
    { url: photo1, alt: "photo 1" },
    { url: photo2, alt: "photo 2" },
    { url: photo3, alt: "photo 3" },
    { url: photo4, alt: "photo 4" },
    { url: photo5, alt: "photo 5" },
  ];
  return (
    <div>
      <Book
        imageUrl={photo1}
        title={"Waiting in Bangalore: Part 1"}
        description={
          "I was in Bangalore for a few months during a weird phase in my life. I met several people, for different reasons. This book is a short fiction sitcom-kind-of novel trying to explore all the kinds of people I have met then and all the places that I have been to, in Bangalore. I have tried to reflect my experiences by weaving around a fictional tale around a few people in their twenties, living in Bangalore. This is my first book. There could be mistakes but I tried to make it a good read. If you’ve liked it, reach me out and let me know. If you’ve complaints, we must definitely talk."
        }
        link1={"https://www.amazon.in/Waiting-Bangalore-Part-Lohith-Bollineni-ebook/dp/B089S1KG9W"} linkn1={'e-Book: Kindle (everywhere)'}
        link2={"https://store.pothi.com/book/lohith-bollineni-waiting-bangalore-part-1/"} linkn2={'Paperback: Pothi.com (India)'}
        link3={"https://www.flipkart.com/waiting-bangalore-part-1/p/itm8a3184b82f520?pid=9781637542927&lid=LSTBOK9781637542927PZO9OI&marketplace=FLIPKART"} linkn3={'Paperback: Flipkart (India)'}
        link4={"https://www.amazon.in/Waiting-Bangalore-Part-Lohith-Bollineni/dp/1637542925/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr="} linkn4={'Paperback: Amazon (India)'}
        link5={"https://www.amazon.com/Waiting-Bangalore-Part-Lohith-Bollineni/dp/B09NRHKHFX/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr="} linkn5={'Paperback: Amazon (USA)'}
        link6={"https://www.amazon.com/Waiting-Bangalore-Part-Lohith-Bollineni/dp/B09NR8D6Q4/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=&sr="} linkn6={'Hardcover: Amazon (USA)'}
      />
    </div>
  );
}

export default Book1;
