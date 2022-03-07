export default function useWriteText(e) {
  navigator.clipboard.writeText(e.target.innerText).then(
    function () {},
    function () {
      console.log("bad");
    }
  );
}