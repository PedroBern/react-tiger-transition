// get args from code mirror text

export default function getArgs(code) {
  try {
    const args = (new Function(`return (${code})`))();
    return Object.prototype.toString.call(args) === '[object Object]' ?
      args : false;
  } catch (error) {
    console.error(error);
    return false
  }
}
