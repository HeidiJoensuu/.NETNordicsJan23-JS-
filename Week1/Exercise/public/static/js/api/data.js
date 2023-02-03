/**
 * This function fetch data of ***
 * @returns {Array<Object>} Array of objects
 */
const fetchData = async () => {
    console.log('starting');
    try {
        let response = await fetch("https://solid-well-zoo.glitch.me/translations")
        console.log('R', response);
        return response.json()
    } catch (error) {
        console.log('error',error);
    }
}
export default fetchData