if(typeof jQuery == "function") {
    jQuery(function () {
        // let result = solution2([[1,2],[3,4]],1);
        // console.log(result);

        let result = solution3(3);
        console.log(result);
    })
}
const solution = function (matrix, rotation) {

    if (matrix.length === 0) return [];

    // 입력받은 행렬의 가로(열):M 세로(행):N 길이
    const M = matrix[0].length;
    const N = matrix.length;

    // 90도, 180도, 270도, 360도 회전 구별 위함
    const K = rotation % 4;

    let result = [];

    // Advanced: m*n -> n*m , k번 회전 구현
    if (K === 0) return matrix;
    if (K === 2) {
        for (let row = 0; row < N; row++) {
            result[row] = [];
            for (let col = 0; col < M; col++) {
                result[row][col] = matrix[M-row-1][N-col-1];
            }
        }
    }
    else {
        for (let row = 0; row < M; row++) {
            result[row] = [];
            for (let col = 0; col < N; col++) {
                if (K === 1)
                    result[row][col] = matrix[N-col-1][row];
                if (K === 3)
                    result[row][col] = matrix[col][M-row-1];
            }
        }
    }

    return result;

};

const solution2 = function (matrix, r) {

    let answer = [];

    let w = matrix[0].length;//가로
    let h = matrix.length;//세로
    let rotation = r % 4;// 1:90도,2:180도,3:270도,0:360도

    if(rotation ===0){
        return matrix;
    } else if (rotation ===1 || rotation ===3) {
        // matrix[0].map((x,xi)=>{
        //     answer[xi] = [];
        //     matrix.map((y,yi)=>{
        //         answer[xi][yi] = rotation === 1 ? matrix[yi-1][xi] : matrix[yi][xi-1];
        //     })
        // })
        for (let i=0; i<w; i++){
            answer[i] = [];
            for (let j=0; j<h; j++){
                answer[i][j] = rotation ===1 ? matrix[h-j-1][i] : matrix[j][w-i-1];
            }
        }
    } else {
        for (let i=0; i<h; i++){
            answer[i] = [];
            for (let j=0; j<w; j++){
                answer[i][j] = matrix[w-i-1][h-j-1];
            }
        }
    }

    return answer;

};

function solution3(n) {
    var answer = 0;

    let newArr = [0, 1]; //0번째 1번째 요소는 고정시켜두고

    let fib = (n) => { //함수 한개를 선언해주고
        if (newArr[n] !== undefined){
            return newArr[n]; //이미 있는 건 그대로 리턴
        }
        newArr[n] = fib(n - 1) + fib(n - 2); //없는 건 새로 만들어서 저장!!!*****
        return newArr[n];
    };

    answer = fib(n);

    return answer;
}