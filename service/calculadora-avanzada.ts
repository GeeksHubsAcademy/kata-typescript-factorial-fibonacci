import suma from './calculadora';

export const media = (a: number, b: number): number => {
  return suma(a, b) / 2;
};

export const empty = () : void => {  };

const Logger = { 
  info  : () => {},
  fatal : () => {}
 };

export const closeConnectionLogger = (): boolean => {
  return closeConnection(Logger)
}

export const closeConnection = (logger): boolean => {
  var res = true;

  try {
    empty();
    logger.info();
  } catch(e) {
    res = false
    logger.fatal();
  }
  finally{
      return res;
  }

  };

/**
 * Time complexity: O(N)
 * @param n 
 */
export const factorialIterativo = (n:number) : number => {
  var total = 1; 
	for (var i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
} 


/**
 * Time complexity;  2^log2*n
 * @param n 
 */
export const factorial = (n:number) : number => {
  return  (n === 0)
      ? 1
      : n * factorial( n - 1 ); 
} 


/**
 * Time complexity: O(N)
 * @param num 
 */
export const fibonacciIterativo = (num : number) : number => {
  var a = 1, b = 0, temp;
  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

/**
 * Time complexity: O(2^N)
 * @param num 
 */
export const fibonacciRecursivo = (num : number) : number => {
  if (num <= 1) return 1;
  return fibonacciRecursivo(num - 1) + fibonacciRecursivo(num - 2);
}


/**
 * Time complexity: O(2N)
 * @param num 
 * @param memo 
 */
export const fibonacci = (num : number, memo: {} ) : number => {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}