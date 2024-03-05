export abstract class BaseClass {
  constructor(
    private baseValue: string,
    private ctx: { [key: string]: unknown }
  ) {}

  public hoge<ResultT>(payload: { [key: string]: unknown }) {
    // テスト走行時には全て無効な値を流し込むため
    // それらの影響で落ちないことの確認のために、オブジェクトの子を意図的に書いている
    console.log(this.baseValue, this.ctx.hoge, payload.piyo);
    // サンプルコードなので戻り値はスタブ
    return {} as ResultT;
  }
}
