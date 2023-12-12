class Goals{

    constructor(articleid, h2id, h2text, ptext, imgid, imgsrc, imgalt){
        this.articleid = articleid;
        this.h2id = h2id;
        this.h2text = h2text;
        this.ptext = ptext;
        this.imgid = imgid;
        this.imgsrc = imgsrc;
        this.imgalt = imgalt;
    }

}

const goal1 = new Goals("zeroBox","zeroHunger","Zero hunger","The number of people facing hunger and food insecurity has been on the rise since 2015, with the pandemic, conflict climate change and growing inequalities exacerbating the situation. In 2015, 589 million people were experiencing hunger, and by 2021, that number had risen to 768 million. Projections show that by 2030, approximately 670 million people will still be facing hunger - 8% of the world's population, the same as in 2015. Despite global efforts, too many children continue suffering from malnutrition and the current annual rate of reduction in stunting must increase by 2.2 times to meet the global target.","grainMan","grainman.jpg","Man fedding children");

const goal2 = new Goals("reducedBox","reducedInqual","Reduced Inequalities","Before the pandemic, the incomes of the bottom 40% of the population grew faster than the national average in a majority of countries. The impacts of the pandemic and uneven recoveries in different regions of the world threaten to reverse that trend and further worsen global inequality. Record numbers are being forced to flee conflicts and economic hardship. By mid-2022, one in 251 people worldwide was a refugee, the highest proportion ever documented. Achieving SDG 10 requires concerted efforts to address the root causes of wage disparities and access to resources both within- and between-country inequality.","reducedinequality","reducedinequality.jpeg","reduced inequality");

const goal3 = new Goals("genderBox","genderEqual","Gender Equality","The world is not on track to achieve gender equality by 2030. At the global level, none of the 18 indicators “met or almost met” the targets and only one is “close to target”. At the current rate of progress, it is estimated that it will take up to 286 years to close gaps in leg al protection and remove discriminatory laws, 140 years for women to be represented equally in positions of power and leadership in the workplace, and 47 years to achieve equal representation in national parliaments. Cascading global crises have highlighted and exacerbated existing gender inequalities, such as unequal access to healthcare, education, and economic opportunities.","genderequality","genderequality.jpg","gender equality");

const allGoals = [];

allGoals.push(goal1);
allGoals.push(goal2);
allGoals.push(goal3);

const sectionCenter = document.querySelector("#goals-section");

function loadContent(){
    let displayItem = allGoals.map( (item) => {
        return `
        <article id="${item.articleid}" class="Box">
        <h2 id="${item.h2id}">${item.h2text}</h2>
        <p class="allP">${item.ptext}</p>
        <img id="${item.imgid}" src="${item.imgsrc}" alt="${item.imgalt}">
    </article>
        `;
    });
    displayItem = displayItem.join("")
    sectionCenter.innerHTML = displayItem;

};

window.addEventListener("DOMContentLoaded", loadContent, false);

