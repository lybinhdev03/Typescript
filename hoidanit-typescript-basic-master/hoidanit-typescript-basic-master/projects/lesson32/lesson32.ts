function add(a: number, b: number): number; 
function add(a: string, b: string): string; 
function add(a: any, b: any): any { 
    return a + b; 
}

console.log(add(1, 2), add("ly", "Binh")); // 3

class Counter { 
    private current: number = 0; 
    count(): number; 
    count(target: number): number[]; 
    count(target?: number): number | number[] { 
        if (target) { 
            let values: number[] = []; 
            for (let start = this.current; start <= target; start++) { 
                values.push(start); 
            }
            return values; 
        }
        return ++this.current; 
    } 
}
    let counter111 = new Counter(); 
    console.log(counter111.count()); // return a number 
    console.log(counter111.count(20)); // return an array
    