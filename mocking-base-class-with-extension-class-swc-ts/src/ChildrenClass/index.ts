import { BaseClass } from '../BaseClass';

export class ChildrenClass extends BaseClass {
  constructor(baseValue: string, ctx: { [key: string]: unknown }) {
    super(baseValue, ctx);
  }

  public piyo<ResultT>(payload: { [key: string]: unknown }) {
    try {
      // このsuper.hoge()をモックして、
      // catchの中に流れるかどうかを確認するのが目的
      return super.hoge<ResultT>(payload);
    } catch (err) {
      // 実際はロガーが動くような部分だが、サンプルコードのためconsole.logで代用する
      console.log(err);

      throw err;
    }
  }
}
