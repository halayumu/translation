const words = {
    'Apple': 'りんご',
    'Orange': 'オレンジ',
    'Apple': 'りんご'
}

let q = prompt('英単語を入力してください');
if (words[q]) {
    document.write(`${q}の日本語訳は${words[q]}です`);
} else {
    document.write('その単語は登録されていません');
}