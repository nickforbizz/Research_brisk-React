
// ___________________ Variables _____________________________________
const tinymceKey = '9n7q5uo1xhu6jzgvvgmzn0w0qly6ck0p6cffyk4iwxl5ieyq';


// ____________________ FUNCS ________________________________________
// add ellipses to card content
const renderContent = (card_content) => {
    let info = null;
    (card_content.length > 150) ? info = card_content.substring(0,150) + ' ...' : info = card_content;
    return info;
}


export {
    renderContent, tinymceKey
}