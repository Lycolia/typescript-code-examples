import { ChildrenClass } from '.';
import { BaseClass } from '../BaseClass';

describe('fetch', () => {
  it('親のfetchが呼ばれ、親の戻り値が返ってくること', () => {
    // 子が正しくreturnしてくるかどうかを確認するための値
    const expected = { code: 200 };

    // Class.prototypeとやるとモック出来る
    const spiedSuperFetch = jest
      .spyOn(BaseClass.prototype, 'hoge')
      .mockReturnValue(expected);

    // 親クラスの処理はモックするので適当な値を入れておく
    // この内容が実行されていればテストが落ちるのでテストコードが間違っていることの検証に使える
    const inst = new ChildrenClass('aaaa', {} as { [key: string]: unknown });
    const actual = inst.piyo({ foo: 123 });

    // 親クラスのメソッドが正しい引数で呼ばれたことの確認
    expect(spiedSuperFetch).toHaveBeenCalledWith({ foo: 123 });
    // 子クラスのメソッドの戻り値が正しいことの確認
    expect(actual).toStrictEqual(expected);
  });

  it('親のfetchで例外が出たときに、ログ出力とリスローがされること', () => {
    const expected = Error('ERR');
    // 親クラスのメソッドが例外をスローするケースを作る
    jest.spyOn(BaseClass.prototype, 'hoge').mockImplementation(() => {
      throw expected;
    });

    // catch句の中でロガーが動いているかどうかの検査用
    const spiedConsoleLog = jest.spyOn(console, 'log');

    const inst = new ChildrenClass('aaaa', {} as { [key: string]: unknown });

    // 例外がリスローされていることを確認
    expect(() => {
      inst.piyo({ foo: 123 });
    }).toThrow(expected);
    // ロガーが動いていることを確認
    expect(spiedConsoleLog).toHaveBeenCalled();
  });
});
