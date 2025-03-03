/**
 * map src to dest
 * @param src 
 * @param dest 
 * @returns 
 */
const map = (src: any, dest: any) => {
  Object.keys(src).forEach(key => {
    dest.set(key, src[key])
  })
  return dest
}
export default map;