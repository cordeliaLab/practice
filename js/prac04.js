if(typeof jQuery == "function"){
    jQuery(function () {
        // // "TCMA"
        // let survey = ["AN", "CF", "MJ", "RT", "NA"];
        // let choices = [5, 3, 2, 7, 5];
        // let result = solution(survey,choices);
        // console.log(result);


        // // [2,1,1,0]
        // let id_list = ["muzi", "frodo", "apeach", "neo"];
        // let report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"];
        // let k = 2;
        // // let id_list = ["con", "ryan"];
        // // let report = ["ryan con", "ryan con", "ryan con", "ryan con"];
        // // let k = 3;
        // let result = solution2(id_list,report,k);
        // console.log(result);


        // let arr = [1,1,3,3,0,1,1];
        // let result = solution3(arr);
        // console.log(result);


        // //4000
        // let sizes = [[60, 50], [30, 70], [60, 30], [80, 40]];
        // let result = solution4(sizes);
        // console.log(result);

        // //[3, 5]
        // let result = solution5([1, 2, 3, 4, 5, 6],[7, 8, 9, 10, 11, 12]);
        // console.log(result);

        // let result = solution6("one4oneseveneight");
        // console.log(result);


        // //"LRLLLRLLRRL"
        // let result = solution7([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5],"right");
        // console.log(result);

        // //"bat.y.abcdefghi"
        // let result = solution8("...!@BaT#*..y.abcdefghijklm");
        // console.log(result);

        // //"bat.y.abcdefghi"
        // let result = solution9([4,7,12],[true,false,true]);
        // console.log(result);

        // //1
        // let result = solution10([1,2,3,4]);
        // console.log(result);

        // //"leo"
        // let result = solution11(["mislav", "stanko", "mislav", "ana"],["stanko", "ana", "mislav"]);
        // console.log(result);


        let result = solution12([93, 30, 55],[1, 30, 5]);
        console.log(result);
    })
};

function solution(survey, choices) {
    let base = {R:0, T:0, C:0, F:0, J:0, M:0, A:0, N:0};

    let k = "";
    for(let i=0; i<=choices.length-1; i++) {
        k = choices[i] < 4 ? survey[i].substr(0,1) :
            choices[i] > 4 ? survey[i].substr(1,1) : '';
        if (k !== '') {
            base[k] += Math.abs(choices[i]-4);
        }
    };

    // let aplph = survey.map((v, i) => {
    //     if(choices[i] > 4)
    //         base[v.substring(1,2)] += choices[i] - 4;
    //     if(choices[i] < 4)
    //         base[v.substring(0,1)] += 4 - choices[i];
    // });
    // console.log(aplph);


    // let arr = [];
    // let arr_key = [];
    // let idx = 0;
    // let math_idx = 1;
    // let returnValue = '';
    // for (const [key, value] of Object.entries(base)) {
    //     arr[idx] = value;
    //     arr_key[idx] = key;
    //     if( idx !== 0 && math_idx % 2 === 0 ){
    //         let prev_idx = idx - 1;
    //         let check_value = value - arr[prev_idx];
    //         let up_key = key;
    //         if( check_value <= 0 ){
    //             up_key = arr_key[prev_idx]
    //         }
    //         returnValue += up_key;
    //     }
    //     math_idx++;
    //     idx++;
    // }
    // console.log(returnValue);

    // let num=0;
    // let answer = '';
    // let preKey, preValue = "";
    // for (let k in base) {
    //     // console.log('key:'+k+',value:'+base[k]+',index:'+num);
    //     if (num%2 === 1) {
    //         answer += base[k] > preValue? k : preKey;
    //     } else {
    //         preKey = k;
    //         preValue = base[k];
    //     }
    //     num++;
    // }

    let answer = '';
    base['R'] >= base['T'] ? answer +='R' : answer += 'T';
    base['C'] >= base['F'] ? answer +='C' : answer += 'F';
    base['J'] >= base['M'] ? answer +='J' : answer += 'M';
    base['A'] >= base['N'] ? answer +='A' : answer += 'N';

    return answer;
}

function solution2(id_list, report, k) {
    // let answer = [];
    //
    // // 중복제거
    // let reportTemp = report.filter((v,i)=>report.indexOf(v) === i);
    //
    // let obj = {};
    // let stopId = {};
    // let UserId,arr,temp,src,trg;
    // for(let i=0; i<id_list.length; i++){
    //     UserId = id_list[i];
    //
    //     //id_list 순서대로 신고한 id
    //     arr = [];
    //     temp = "";src= "";trg= "";
    //     for(let j=0; j<reportTemp.length; j++){
    //         temp = reportTemp[j].split(' ');
    //         src = temp[0].trim();
    //         trg = temp[1].trim();
    //         if (UserId === src) {
    //             if (arr.indexOf(trg) === -1) {
    //                 arr.push(trg);
    //             }
    //             // id_list 순서대로 신고 당한 횟수
    //             if (stopId.hasOwnProperty(trg) === true) {
    //                 stopId[trg] += 1;
    //             } else {
    //                 stopId[trg] = 1;
    //             }
    //         }
    //     }
    //     obj[UserId] = arr;
    // }
    //
    // // for(const [key, value] of Object.entries(obj)) {
    // for(let key in obj) {
    //     let f = obj[key].filter((x)=>{
    //         return stopId.hasOwnProperty(x)===true && Number(stopId[x]) >= k;
    //     });
    //     answer.push(f.length);
    // }
    //
    // return answer;

    // 사용자 길이만큼 0으로 채움
    const answer = new Array(id_list.length);
    answer.fill(0);

    const report_list = {}
    id_list.map((x) => {
        report_list[x] = [];
    });
    console.log(report_list);

    report.map((x) => {
        //신고한 사람, 신고 당한 사람
        const [userId, reportId] = x.split(' ');
        if(!report_list[reportId].includes(userId)) {
            report_list[reportId].push(userId);
        }
    });
    console.log(report_list);

    for(const key in report_list){
        if(report_list[key].length >= k){
            report_list[key].map((user)=>{
                answer[id_list.indexOf(user)] += 1
            })
        }
    }

    return answer;
}

function solution3(arr) {
    var answer = [];

    //return arr.filter((val,index) => val != arr[index+1]);

    // let preKey;
    // arr.map((x) => {
    //     if (preKey !== x) {
    //         answer.push(x);
    //         preKey = x;
    //     }
    // });

    arr.map((x,i) => {
        if (arr[i+1] !== x) {
            answer.push(x);
        }
    });

    return answer;
}

function solution4(sizes) {
    var answer = 0;
    // 보류
    return answer;
}

function solution5(lottos, win_nums) {
    let answer = [];

    let o=0,x=0,z=0;
    lottos.map((num) => {
        if (num === 0) {
            ++z;
        } else if (win_nums.includes(num)){
            ++o;
        } else {
            ++x;
        }
    });

    console.log(o,x,z);

    let max = z===6?1: x===6?6:7-(6-x);
    answer.push(max);
    let min = z===6?6: x===6?6:7-(6-x-z);
    answer.push(min);

    return answer;
}

function solution6(s) {
    let answer = s;
    let arr = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    arr.map((a,i)=>{
        if (s.indexOf(a) > -1){
           let tmp = answer.split(a);
           answer = tmp.join(i.toString());
        }
    });
    return Number(answer);
}

function solution7(numbers, hand) {
    var answer = '';
    //보류
    return answer;
}

function solution8(new_id) {
    const newId = new_id
        .toLowerCase()
        .replace(/[^\w_.-]/g, '')
        .replace(/[.]{2,}/g, '.')
        .replace(/^[.]+/, '')
        .replace(/[.]+$/, '')
        .replace(/^$/, 'a')
        .substring(0, 15)
        .replace(/[.]+$/, '');
    return newId.padEnd(3, newId[newId.length - 1]);
}

function solution9(absolutes, signs) {
    var answer = 0;
    signs.map((s,i)=>{
        answer += s===false ? (absolutes[i] * -1) : absolutes[i];
    });
    return answer;
}

function solution10(nums) {
    let len = nums.length, answer = 0;
    for (let i = 0; i < len - 2; i++) {
        for (let j = i + 1; j < len - 1; j++) {
            for (let k = j + 1; k < len; k++) {
                if (isPrime(nums[i] + nums[j] + nums[k])) {
                    answer++;
                }
            }
        }
    }
    return answer;
}
const isPrime = (n) => {
    //Math.sqrt = 제곱근(루트)구하기
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function solution11(participant, completion) {

    let answer = '';
    participant.sort();
    completion.sort();
    console.log(participant);
    console.log(completion);

    for(let i=0 ; i<participant.length ; i++){
        if(participant[i] !== completion[i]){
            return participant[i];
        }
    }

    return answer;
}

//[93, 30, 55]
//[1, 30, 5]
function solution12(progresses, speeds) {
    let answer = [0];
    let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    console.log(days);
    let maxDay = days[0];
    // console.log(maxDay);

    for(let i = 0, j = 0; i< days.length; i++){
        if(days[i] <= maxDay) {
            answer[j] += 1;
        } else {
            maxDay = days[i];
            answer[++j] = 1;
        }
    }

    return answer;
}