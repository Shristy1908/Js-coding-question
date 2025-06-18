// Count Frequency of Words

const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

const frequency={};

for(const word of words){
    if(frequency[word]){
        frequency[word]++;
    }
    else{
        frequency[word] = 1;
    }

}
for(let key in frequency){
    document.writeln(key+" : "+frequency[key]);
}
