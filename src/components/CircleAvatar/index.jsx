function CircleAvatar({ url, size, callback }) {
   return (
      <img
         src={url}
         style={{ width: `${size}px`, height: `${size}px` }}
         onClick={callback}
         className="rounded-full border"
         alt=""
      />
   );
}

export default CircleAvatar;
