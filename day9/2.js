let lodash=require("lodash")

function countLembah(steps){
    let altitude = 0
    let lembahCounter = 0
    for (const step of steps){
        if (step == 'D'){
            altitude -= 1
        } else if (step == 'U'){
            if (altitude == -1){
                lembahCounter++
            }
            altitude += 1
        }
    }
    return lembahCounter
}

const arah1 = "DDUUDDUDUUUD"
const arah2 = "UDDDUDUU"
const arah3 = "DUDUUUUUUUUDUDDUUDUUDDDUUDDDDDUUDUUUUDDDUUUUUUUDDUDUDUUUDDDDUUDDDUDDDDUUDDUDDUUUDUUUDUUDUDUDDDDDDDDD"

const steps1 = lodash.split(arah1, '')
const steps2 = lodash.split(arah2, '')
const steps3 = lodash.split(arah3, '')

console.log(countLembah(steps1))
console.log(countLembah(steps2))
console.log(countLembah(steps3))
