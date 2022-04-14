// © Jadon Duff 2022
function link() {
    var string = document.getElementById('n').value
    var advanced = string.split('4/4').length-1
    var proficient = string.split('3/4').length-1
    var developingHigh = string.split('2.5/4').length-1
    var developingLow = string.split('2/4').length-1
    var emerging = string.split('1/4').length-1
    var missing = string.split('0/4').length-1

    var grade = ((advanced*100)+(proficient*93)+(developingHigh*82)+(developingLow*77)+(emerging*66)+(missing*50))/(advanced+proficient+developingHigh+developingLow+emerging+missing)

    document.getElementById('grade').innerHTML = grade + "%"
}