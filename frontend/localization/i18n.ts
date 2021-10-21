export const i18n = {
  locales: ['en', 'ua'],
  defaultLocale: 'en',
  lazy: true,
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
    redirectOn: 'root', // recommended
  },
  vueI18n: {
    fallbackLocale: 'en',
    messages: {
      en: {
        vk_mobile: 'VK for mobile devices',
        vk_mobile_description:
          'Install our official mobile app and stay in touch with your friends anytime and anywhere.',
        // SIGN IN
        login: 'Phone or Email',
        password: 'Password',
        signIn: 'Sign In',
        forget: 'Forget the password ?',
        //Register StepOne
        titleFirstTimeHere: 'First time here?',
        SignUpForVK: 'Sign up for VK',
        firstName: 'First Name',
        lastName: 'Last Name',
        birthday: 'Birthday',
        birthdayDescript:
          'By providing your birthday, your friends will be able to find you more easily and help us select interesting content to recommend to you.You can edit your profile to manage who can view your birthday.',
        gender: 'Your gender',
        female: 'Female',
        male: 'Male',
        continRegister: 'Continue registration',
        registerFacebook: 'Sign in with Facebook',
        learnMoreRegister:
          "After registering, you'll get access to all of VK Connect's features.",
        learnMoreWord: 'Learn more',
        cancel: 'Cancel',
        forWord: 'for',
        allProduct: 'All products',
        //Footer
        footerAbout: 'About VK',
        footerTerms: 'Terms',
        footerDev: 'Developers',
        //StepTwo
        titleManyServices: 'Many services. One account.',
        textOneServices:
          ' Create a VK account and use it to sign in to other online services',
        textTwoServices:
          ' Your data is protected. Set up 2-step verification and keep track of your activity history.',
        textThreeServices: ' Use VK ID across all devices',
        textServicesMoreAbout: 'More about VK ID',
        textRightTitle: 'Account validation',
        textRightText:
          "You'll use your phone number to sign in to your account",
        textRightLabelCountry: 'Country/Region',
        textRightLabelPhone: 'Mobile phone number',
      },
      ua: {
        vk_mobile: 'ВК для мобільних пристроїв',
        vk_mobile_description:
          "Встановіть наш офіційний мобільний додаток і будьте на зв'язку зі своїми друзями в будь -який час і в будь -якому місці.",
        // SIGN IN
        login: 'Телефон або електронна пошта',
        password: 'Пароль',
        signIn: 'Увійти',
        forget: 'забули пароль ?',
        //Register StepOne
        titleFirstTimeHere: 'Вперше тут?',
        SignUpForVK: 'Зареєструйтесь у ВК',
        firstName: "Ім'я",
        lastName: 'Прізвище',
        birthday: 'День народження',
        birthdayDescript:
          'Вказавши свій день народження, ваші друзі зможуть легше знайти вас і допомогти нам вибрати цікавий вміст, який вам рекомендуватимуть. Ви можете редагувати свій профіль, щоб визначати, хто може переглядати ваш день народження.',
        gender: 'Ваша стать',
        female: 'Жіночий',
        male: 'Чоловічий',
        continRegister: 'Продовжити реєстрацію',
        registerFacebook: 'Увійдіть у Facebook',
        learnMoreRegister:
          'Після реєстрації ви отримаєте доступ до всіх функцій VK Connect.',
        learnMoreWord: 'Вчи більше',
        cancel: 'Скасувати',
        forWord: 'для',
        allProduct: 'Всі продукти',
        //Footer
        footerAbout: 'Про ВК',
        footerTerms: 'Умови',
        footerDev: 'Розробники',
        //StepTwo
        titleManyServices: 'Багато послуг. Один рахунок.',
        textOneServices:
          ' Створіть обліковий запис VK і використовуйте його для входу в інші онлайн -сервіси',
        textTwoServices:
          ' Ваші дані захищені. Налаштуйте двоетапну перевірку та відстежуйте історію своєї діяльності.',
        textThreeServices: ' Використовуйте ідентифікатор ВК на всіх пристроях',
        textServicesMoreAbout: 'Детальніше про VK ID',
        textRightTitle: 'Валідація облікового запису',
        textRightText:
          'Ви будете використовувати свій номер телефону щоб увійти до свого облікового запису',
        textRightLabelCountry: 'Країна/регіон',
        textRightLabelPhone: 'Номер мобільного телефону',
      },
    },
  },
}
