module.exports = {
  root: true,
  extends: ['next/core-web-vitals', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint/eslint-plugin'],
      rules: {
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/no-unused-expressions': [
          2,
          { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true },
        ], // 禁止无用的表达式
        'no-unused-vars': 'off',
        'no-shadow': 'off',
        // '@typescript-eslint/no-shadow': 1,
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    'no-unneeded-ternary': 0, // 必须使用 !a 替代 a ? false : true
    'no-useless-escape': 0, // 禁止出现没必要的转义
    'no-prototype-builtins': 0, // 禁止使用 hasOwnProperty, isPrototypeOf 或 propertyIsEnumerable
    // 'no-constant-condition': 0,
    'no-constant-condition': [2, { checkLoops: false }], // 禁止将常量作为分支条件判断中的测试表达式，但允许作为循环条件判断中的测试表达式
    'no-use-before-define': 0,
    'no-shadow': 0, // 禁止变量名与上层作用域内的已定义的变量重复
    'no-restricted-globals': 0, // 禁止使用指定的全局变量
    'no-restricted-syntax': 0, // 禁止使用指定的语法
    'generator-star-spacing': 0,
    'no-multiple-template-root': 0,
    'no-v-model-argument': 0,
    'no-case-declarations': 0, // switch 的 case 内有变量定义的时候，必须使用大括号将 case 内变成一个代码块
    'no-var': 2, // 禁止使用var
    'no-with': 2, // 禁用with
    'no-eq-null': 2, // 禁止对null使用==或!=运算符
    'no-eval': 1, // 禁止使用eval
    'no-alert': 2, // 禁止使用alert confirm prompt
    'no-div-regex': 1, // 不能使用看起来像除法的正则表达式/=foo/
    'no-empty-function': 0, // 禁止出现空函数 【关闭】 有时需要将一个空函数设置为某个项的默认值
    'no-array-constructor': 2, // 禁止使用数组构造器
    'no-implied-eval': 2, // 禁止使用隐式eval
    'no-multiple-empty-lines': 2, // 禁止出现多行空行
    'comma-spacing': [2, { before: false, after: true }], // 逗号间距
    'no-extra-parens': [2, 'functions'], // 仅在函数表达式附近禁止不必要的括号
    'no-console': process.env.NODE_ENV === 'production' ? 1 : 0, // 禁用 console
    'no-debugger': process.env.NODE_ENV === 'production' ? 1 : 0, // 生产环境禁止使用debug模式
    'array-bracket-spacing': [2, 'never'], // 强制数组方括号中使用一致的空格
    'no-dupe-keys': 2, // 在创建对象字面量时不允许键重复 {a:1,a:1}
    'no-dupe-args': 2, // 函数参数不能重复
    'no-duplicate-case': 2, // switch中的case标签不能重复
    eqeqeq: 1, // 必须使用全等
    'no-fallthrough': 1, // 禁止switch穿透
    'no-extra-label': 2, // 禁用不必要的标签
    'no-invalid-regexp': 2, // 禁止无效的正则表达式
    'no-invalid-this': 0, // 禁止无效的this，只能用在构造器，类，对象字面量
    'no-irregular-whitespace': 2, // 不能有不规则的空格
    'no-iterator': 2, // 禁止使用__iterator__ 属性
    'no-label-var': 2, // label名不能与var声明的变量名相同
    'no-labels': 2, // 禁止标签声明
    'no-lone-blocks': 2, // 禁止不必要的嵌套块
    'no-mixed-spaces-and-tabs': [2, false], // 禁止混用tab和空格
    'no-multi-spaces': 1, // 不能用多余的空格
    'no-multi-str': 2, // 字符串不能用\换行
    'no-new-func': 1, // 禁止使用new Function
    'no-new-object': 2, // 禁止使用new Object()
    'no-new-require': 2, // 禁止使用new require
    'no-redeclare': 2, // 禁止重复声明变量
    // 'no-unused-expressions': 2, // 禁止无用的表达式
    // 'no-unused-vars': [2, {vars: 'all', args: 'after-used'}], // 不能有声明后未被使用的变量或参数
    curly: ['error', 'multi-line'], // 禁止多行省略括号
    'prefer-const': 0, // 首选const
    'id-match': 0, // 命名检测
    'no-sparse-arrays': 2, // 禁止稀疏数组， [1,,2]
    'no-spaced-func': 2, // 函数调用时 函数名与()之间不能有空格
    'no-useless-return': 2, // 禁止多余的 return 语句
    'no-nested-ternary': 2, // 禁止使用嵌套的三目运算
    'spaced-comment': [
      2,
      'always',
      {
        markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ','],
      },
    ], // 注释开始后，此规则将强制间距的一致性//或/*
    quotes: ['warn', 'single', { avoidEscape: true }],
    complexity: ['warn', { max: 25 }], // 禁止函数的循环复杂度超过 25
    'no-unused-vars': [
      2,
      { vars: 'all', args: 'none', ignoreRestSiblings: false, caughtErrors: 'none' },
    ], // 已定义的变量必须使用
    'no-unused-expressions': 0, // 禁止无用的表达式
    // 'chai-friendly/no-unused-expressions': [2, {'allowShortCircuit': true, 'allowTernary': true}], // 使用chai-friendly插件覆盖了no-unused-expressions，使其对chai expect和should语句更友好
    'no-useless-constructor': 2, // 禁止出现没必要的 constructor
    'no-useless-concat': 2, // 禁止出现没必要的字符串连接
    'no-useless-computed-key': 2, // 禁止出现没必要的计算键名
    'no-useless-catch': 2, // 禁止在 catch 中仅仅只是把错误 throw 出去
    'no-unsafe-finally': 2, // 禁止在 finally 中出现 return, throw, break 或 continue
    'no-unreachable': 2, // 禁止在 return, throw, break 或 continue 之后还有代码
    'no-shadow-restricted-names': 2, // 禁止使用保留字作为变量名
    'no-this-before-super': 2, // 禁止在 super 被调用之前使用 this 或 super
    'handle-callback-err': 0, // 回调错误处理
    // react rules
    'react/no-arrow-function-lifecycle': 0, // 类组件中的生命周期函数不要使用箭头函数
    'react/function-component-definition': 0, // 限制函数式组件的函数形式（函数声明、函数表达式或箭头函数）
    'react/jsx-max-depth': 0, // 限制 jsx 层级
    'react/no-did-mount-set-state': 0, // 同构应用需要在 didMount 里使用 setState
    'react/jsx-key': [2, { checkFragmentShorthand: true }], // 数组中的 jsx 必须有 key
    'react/jsx-no-useless-fragment': 2, // 禁止无意义的 Fragment 组件
    'react/jsx-pascal-case': 2, // 组件的名称必须符合 PascalCase
    'react/jsx-uses-react': 2, // 修复 React 被误报为未使用的变量的问题（仅在开启 no-unused-vars 时有效）
    'react/no-children-prop': 2, // 禁止将 children 作为一个 prop
    'react/no-deprecated': 2, // 禁止使用已废弃的 api
    'react/no-did-update-set-state': 2, // 禁止在 componentDidUpdate 里使用 setState
    'react/no-direct-mutation-state': 2, // 禁止直接修改 this.state
    'react/no-redundant-should-component-update': 2, // 禁止在 React.PureComponent 中使用 shouldComponentUpdate
    'react/no-string-refs': 2, // 禁止使用字符串 ref
    'react/no-this-in-sfc': 2, // 禁止在函数组件中使用 this
    'react/no-typos': 2, // 禁止组件的属性或生命周期大小写错误
    'react/no-unescaped-entities': 2, // 禁止在组件的内部存在未转义的 >, \", ' 或 }
    'react/no-unsafe': [1, { checkAliases: true }], // 禁止使用不安全的生命周期方法 componentWillMount, componentWillReceiveProps, componentWillUpdate
    'react/react-in-jsx-scope': 0, // 出现 jsx 的地方必须导入 React
    'react/sort-comp': [
      1,
      { order: ['static-methods', 'static-variables', 'lifecycle', 'everything-else', 'render'] },
    ], // 组件内方法必须按照一定规则排序
    'react/static-property-placement': 2, // 类的静态属性必须使用 static 关键字定义

    // eslint-plugin-react-hooks
    'react-hooks/exhaustive-deps': 'warn', // 检查效应依赖关系

    // typescript
    '@typescript-eslint/no-use-before-define': 0, // 禁止在定义变量之前就使用它
    '@typescript-eslint/prefer-as-const': 0, // 使用 as const 替代 as 'bar'
    '@typescript-eslint/prefer-enum-initializers': 0, // 枚举值必须初始化
    '@typescript-eslint/prefer-literal-enum-member': 0, // 枚举类型的值必须是字面量，禁止是计算值
  },
};
