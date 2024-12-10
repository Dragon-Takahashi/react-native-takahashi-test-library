import AsyncStorage from '@react-native-async-storage/async-storage';
import UUID from 'react-native-uuid';

require('@react-native-async-storage/async-storage');

// export function multiply(a: number, b: number): Promise<number> {
//   return Promise.resolve(a * b);
// }

export async function getuuid(): Promise<string> {
  try {
    var uuid = await asyncLoadStorage('uuid');
    if (uuid === undefined || uuid === null) {
      uuid = UUID.v4();
      await asyncSaveStorage('uuid', uuid);
    }
    console.log('resolve: $a', uuid);
    return Promise.resolve(uuid);
  } catch (error) {
    console.log('reject');
    return Promise.reject();
  }
}

export async function multiply(a: number, b: number): Promise<number> {
  // await const st = AsyncStorage.getItem("test")
  return Promise.resolve(a * b);
}

export async function asyncLoadStorage(key: string): Promise<string | null> {
  try {
    const a = await AsyncStorage.getItem(key);
    return Promise.resolve(a);
  } catch (error) {
    return Promise.reject();
  }
}

async function asyncSaveStorage(key: string, value: string): Promise<null> {
  try {
    await AsyncStorage.setItem(key, value);
    return Promise.resolve(null);
  } catch (error) {
    return Promise.reject();
  }
}

export async function asyncCalculation(a: number, b: number): Promise<number> {
  const loadValue = await asyncLoadStorage('test1');
  console.log(loadValue);
  var cal = await multiply(a, b);
  if (loadValue != null) {
    cal = cal + Number(loadValue);
  }
  console.log(cal);
  asyncSaveStorage('test1', String(cal));
  return Promise.resolve(cal);
}

// 指定した型の値を渡す
export async function asyncVopt(vp: vProps) {
  const op1 = vp.opt_1;
  const op2 = vp.opt_2;
  console.log(op1);
  console.log(op2);
}

export type vProps = {
  opt_1: string;
  opt_2?: string;
};
