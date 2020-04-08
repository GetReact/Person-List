import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const Person = ({ img, name, job, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <article className="person">
      <img src={url} alt="person image" />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

const PersonList = () => {
  return (
    <section className="person-list">
      <Person img="34" name="Alex" job="Developer Python" />
      <Person img="22" name="Ayla" job="Developer React">
        <p>
          austin etsy, pop-up stumptown air plant selfies man bun XOXO. Kitsch
          chillwave retro man braid. Chia gochujang taxidermy, viral leggings
          vegan portland cardigan PBR&B gluten-free VHS actually letterpress
          neutra franzen
        </p>
      </Person>
      <Person img="56" name="Maya" job="the Boss" />
    </section>
  );
};

ReactDOM.render(<PersonList></PersonList>, document.getElementById("root"));
