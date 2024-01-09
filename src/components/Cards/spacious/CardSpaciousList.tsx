import CardSpacious from "./CardSpacious";

export interface cardcontent {
  image?: string;
  video?: string;
  user_id: string;
  title: string;
  text: string;
  like_count: number;
  comments_count: number;
}

interface data {
  data_array: Array<cardcontent>;
}

const CardSpaciousList = ({ data_array }: data) => {
  return (
    <>
      {data_array.map((data) => (
        <CardSpacious
          user_id={data.user_id}
          title={data.title}
          text={data.text}
          like_count={data.like_count}
          comments_count={data.comments_count}
          image={data.image}
          video={data.video}
        />
      ))}
    </>
  );
};

export default CardSpaciousList;
