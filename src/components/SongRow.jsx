import React from "react";

export default function SongRow({ track }) {
  console.log(track);
  return (
    <div className="song__row">
      <table
        className="table table-responsive-sm border_less"
        style={{ color: "#c0c0c0" }}
      >
        <tbody>
          <tr>
            <td className="td__">
              <img
                className="song_-row_-album"
                src={track?.album?.images[0].url}
                alt=""
              />
              <p className="ms-2">
                {track?.artists.map((artist) => artist.name).join(",")}
                <br />
                <span className="p_name">{track?.album?.name}</span>
              </p>
            </td>
            <td>{track?.album?.artists[0].name}</td>
            <td>{track?.album?.release_date}</td>
            <td>{track?.album?.name}</td>
            <td>{track?.album?.name}</td>
            {/* <td>{track?.album?.duration_ms}</td> */}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
