import React from "react";
import CardSpacious from "./CardSpacious";

const CardSpaciousList = () => {
  return (
    <div>
      <CardSpacious
        video="https://packaged-media.redd.it/jdkdswkh5ebc1/pb/m2-res_1350p.mp4?m=DASHPlaylist.mpd&v=1&e=1704848400&s=b4aaf3d10d078159130e6bef88484de7b003329b#t=0https://packaged-media.redd.it/jdkdswkh5ebc1/pb/m2-res_1350p.mp4?m=DASHPlaylist.mpd&v=1&e=1704848400&s=b4aaf3d10d078159130e6bef88484de7b003329b#t=0"
        title={"Paneer Tikka Masala"}
        text={
          "On Wikipedia and other sites running on MediaWiki, Special:Random can be used to access a random article in the main namespace; this feature is useful as a tool to generate a random article. Depending on your browser, it's also possible to load a random page using a keyboard shortcut (in Firefox, Edge, and Chrome"
        }
        user_id="lol"
        like_count={4}
        comments_count={5}
      />
    </div>
  );
};

export default CardSpaciousList;
