export const Book = (props) => {
  console.log(props.position);

  return (
    <>
      <article className="book">
        <Image></Image>
        <Title></Title>
        <Author></Author>
        <span className="number">#{props.position}</span>
        {props.children}
      </article>
    </>
  );
};

const img =
  "https://images-na.ssl-images-amazon.com/images/I/71sOqrd6JHL._AC_UL600_SR600,400_.jpg";

const Image = () => {
  return <img src={img} alt="" srcset="" />;
};

const Title = () => {
  return <h2>Mom, I Want to Hear Your Story: A Mother’s</h2>;
};

const Author = () => {
  const title = "abc";
  return <h2> {title} </h2>;
};
