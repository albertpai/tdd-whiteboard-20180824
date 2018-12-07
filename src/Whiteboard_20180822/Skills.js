export function jobProspect(student) {
    let softSkillMin = 60
    let hardSkillMin = 40
    return softSkillScore(student) >= softSkillMin && hardSkillScore(student) >= hardSkillMin ?
        'Will land a job!' :
        'Not ready yet!'
}

function softSkillScore(student) {
    let cv = student.softSkills.cv,
        portfolio = student.softSkills.portfolio,
        motivation = student.softSkills.motivation,
        punctuality = student.softSkills.punctuality;
    return cv + portfolio + motivation + punctuality    
}

function hardSkillScore(student){
    let javascript = student.hardSkills.javascript,
        react = student.hardSkills.react,
        css = student.hardSkills.css,
        less = student.hardSkills.less,
        tdd = student.hardSkills.tdd,
        node = student.hardSkills.node;
    return javascript + react + css + less + tdd + node    
}