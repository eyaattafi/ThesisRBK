
enum satisfactionLevel{
    s1='Very satisfied',
    s2='Satisfied',
    s3='disatified'
}
export interface satisfaction{

    idsatisfaction:number,
    satisfactionDegree:satisfactionLevel,
    userIduser:number
}