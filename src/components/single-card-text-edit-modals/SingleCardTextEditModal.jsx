import React, { useState } from "react";

export default function TextEditColorModal() {
  // input color states
  const [inputColorOne, setInputColorOne] = useState("#000000");
  const [inputColorTwo, setInputColorTwo] = useState("#868e96");
  const [inputColorThree, setInputColorThree] = useState("#e8590c");
  const [inputColorFour, setInputColorFour] = useState("#fab005");
  const [inputColorFive, setInputColorFive] = useState("#099268");
  const [inputColorSix, setInputColorSix] = useState("#3b5bdb");
  const [inputColorSeven, setInputColorSeven] = useState("#7950f2");
  const [inputColorEight, setInputColorEight] = useState("#868e96");
  const [inputColorNine, setInputColorNine] = useState("#fff5f5");
  const [inputColorTen, setInputColorTen] = useState("#495057");
  const [inputColorEleven, setInputColorEleven] = useState("#fff5f5");
  const [inputColorTwelve, setInputColorTwelve] = useState("#ffa8a8");
  const [inputColorThirteen, setInputColorThirteen] = useState("#ffe066");
  const [inputColorFourteen, setInputColorFourteen] = useState("#ffec99");
  const [inputColorFifteen, setInputColorFifteen] = useState("#b2f2bb");
  const [inputColorSixteen, setInputColorSixteen] = useState("#748ffc");
  const [inputColorSeventeen, setInputColorSeventeen] = useState("#b197fc");
  const [inputColorEighteen, setInputColorEighteen] = useState("#868e96");

  //
  return (
    <div className="text_edit_color_modal">
      <label
        htmlFor="black_one"
        className="black_one"
        style={{ background: inputColorOne }}
      ></label>
      <input
        type="color"
        id="black_one"
        defaultValue={inputColorOne}
        onChange={(e) => setInputColorOne(e.target.value)}
      />
      {/*  */}
      <label
        htmlFor="grey_one"
        className="grey_one"
        style={{ background: inputColorTwo }}
      ></label>
      <input type="color" id="grey_one" defaultValue={inputColorTwo} />
      {/*  */}
      <label
        htmlFor="orange_one"
        className="orange_one"
        style={{ background: inputColorThree }}
      ></label>
      <input type="color" id="orange_one" defaultValue={inputColorThree} />
      {/*  */}
      <label
        htmlFor="yellow_one"
        className="yellow_one"
        style={{ background: inputColorFour }}
      ></label>
      <input type="color" id="yellow_one" defaultValue={inputColorFour} />
      {/*  */}
      <label
        htmlFor="green_one"
        className="green_one"
        style={{ background: inputColorFive }}
      ></label>
      <input type="color" id="green_one" defaultValue={inputColorFive} />
      {/*  */}
      <label
        htmlFor="blue_one"
        className="blue_one"
        style={{ background: inputColorSix }}
      ></label>
      <input type="color" id="blue_one" defaultValue={inputColorSix} />
      {/*  */}
      <label
        htmlFor="violet_one"
        className="violet_one"
        style={{ background: inputColorSeven }}
      ></label>
      <input type="color" id="violet_one" defaultValue={inputColorSeven} />
      {/*  */}
      <label
        htmlFor="grey_one"
        className="grey_one"
        style={{ background: inputColorEight }}
      ></label>
      <input type="color" id="grey_one" defaultValue={inputColorEight} />
      {/*  */}
      <label
        htmlFor="light_one"
        className="light_one"
        style={{ background: inputColorNine }}
      ></label>
      <input type="color" id="light_one" defaultValue={inputColorNine} />
      {/*  */}
      <label
        htmlFor="grey_one_two"
        className="grey_one_two"
        style={{ background: inputColorTen }}
      ></label>
      <input type="color" id="grey_one_two" defaultValue={inputColorTen} />
      {/*  */}
      <label
        htmlFor="light_one_two"
        className="light_one_two"
        style={{ background: inputColorEleven }}
      ></label>
      <input type="color" id="light_one_two" defaultValue={inputColorEleven} />
      {/*  */}
      <label
        htmlFor="red_one"
        className="red_one"
        style={{ background: inputColorTwelve }}
      ></label>
      <input type="color" id="red_one" defaultValue={inputColorTwelve} />
      {/*  */}
      <label
        htmlFor="orange_one_two"
        className="orange_one_two"
        style={{ background: inputColorThirteen }}
      ></label>
      <input
        type="color"
        id="orange_one_two"
        defaultValue={inputColorThirteen}
      />
      {/*  */}
      <label
        htmlFor="orange_one_three"
        className="orange_one_three"
        style={{ background: inputColorFourteen }}
      ></label>
      <input
        type="color"
        id="orange_one_three"
        defaultValue={inputColorFourteen}
      />
      {/*  */}
      <label
        htmlFor="green_one_two"
        className="green_one_two"
        style={{ background: inputColorFifteen }}
      ></label>
      <input type="color" id="green_one_two" defaultValue={inputColorFifteen} />
      {/*  */}
      <label
        htmlFor="blue_one_two"
        className="blue_one_two"
        style={{ background: inputColorSixteen }}
      ></label>
      <input type="color" id="blue_one_two" defaultValue={inputColorSixteen} />
      {/*  */}
      <label
        htmlFor="purple_one"
        className="purple_one"
        style={{ background: inputColorSeventeen }}
      ></label>
      <input type="color" id="purple_one" defaultValue={inputColorSeventeen} />
      {/*  */}
      <label
        htmlFor="grey_one_three"
        className="grey_one_three"
        style={{ background: inputColorEighteen }}
      ></label>
      <input
        type="color"
        id="grey_one_three"
        defaultValue={inputColorEighteen}
      />
    </div>
  );
}

// Font Family Modal

export const TextEditFamilyModal = () => {
  const [textEditFont, setTextEditFont] = useState("");

  //
  return (
    <div className="font_family_edit_modal">
      <div
        className="text_family_fonts"
        onClick={(e) => setTextEditFont("Arial")}
      >
        Arial
      </div>
      <div
        className="text_family_fonts"
        onClick={(e) => setTextEditFont("Inter")}
      >
        Inter
      </div>
      <div
        className="text_family_fonts"
        onClick={(e) => setTextEditFont("Atholas")}
      >
        Atholas
      </div>
    </div>
  );
};
