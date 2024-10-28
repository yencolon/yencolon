import Image from 'next/image';

const profileImageUrl = 'https://github.com/yencolon.png';

const socialLinks = [
  {
    href: 'https://github.com/yencolon',
    src: '/github.svg',
    alt: 'GitHub',
    username: 'yencolon',
    label: 'Visit GitHub profile'
  },
  {
    href: 'https://www.linkedin.com/in/yencolon/',
    src: '/linkedin.svg',
    alt: 'LinkedIn',
    username: 'yencolon',
    label: 'Visit LinkedIn profile'
  },
  {
    href: 'mailto:yencolon@gmail.com',
    src: '/email.svg',
    alt: 'Email',
    username: 'yenjcc@gmail.com',
    label: 'Send email'
  }
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 sm:p-24">
      <div className="flex flex-col items-center flex-1 w-full">
        <div className="mb-6">
          <Image
            src={profileImageUrl}
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
        <p className="text-4xl sm:text-7xl font-bold text-left first-letter:text-cyan-700 dark:text-white">
          Yen Colon
        </p>
        <p className="text-base sm:text-lg font-light text-left pt-2">
          Software developer
        </p>
        <div className="pt-4 w-full sm:w-3/6">
          <p className="text-sm sm:text-base mb-3 text-gray-500 dark:text-gray-400 px-2 sm:px-0">
            Software developer with over 4 years of experience in the field, possessing strong expertise in front-end and back-end software development. Started as a freelance developer, creating mobile apps and APIs for clients. Currently focused on Java, Kotlin and JavaScript languages.
          </p>
        </div>
        <div className="pt-4 w-full sm:w-3/6">
          <div className="flex justify-around items-center mb-3">
            {socialLinks.map(({ href, src, alt, label, username }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex flex-col items-center text-center w-24"
              >
                <div className="bg-white rounded-full p-2 shadow-md flex items-center justify-center w-16 h-16">
                  <Image src={src} alt={alt} width={24} height={24} />
                </div>
                <span className="text-xs sm:text-sm text-gray-600 mt-2">{username}</span>
              </a>
            ))}
          </div>
        </div>
        <div>
          <a href="https://app.daily.dev/yencolon"><img src="https://api.daily.dev/devcards/v2/N9KR9YPeTeM4HJDAPzGOI.png?type=default&r=zpv" width="356" alt="Yen Colon's Dev Card" /></a>
        </div>
      </div>
      <div className="flex flex-col flex-1 w-full">
        <footer className="flex justify-end flex-col flex-1 w-full text-center mt-auto">
          <p className="text-xs sm:text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Yen Colon. Todos los derechos reservados.
          </p>
        </footer>
      </div>
    </main>
  );
}