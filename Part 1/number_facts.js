// Number 1
async function GetOneFact(number) {
    let url = `http://numbersapi.com/${number}?json`;
    try {
        let fact = await axios.get(url);
        return fact.data;
    } catch (error) {
        console.log(error);
    }
}

GetOneFact(1).then((res) => {
    console.log(res.text);
});

// Number 2
async function GetTMultipleFacts(number1, number2, number3, number4) {
    let allNumbers = [number1, number2, number3, number4];

    let allFactsPromises = allNumbers.map(number => {
        let url = `http://numbersapi.com/${number}?json`;
        return axios.get(url);
    });

    try {
        let allFacts = await Promise.all(allFactsPromises);
        allFacts.forEach(fact => {
            console.log(fact.data.text);
        });
    } catch (error) {
        console.log(error);
    }

}

GetTMultipleFacts(1, 2, 3, 4);


