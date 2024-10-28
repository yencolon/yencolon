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
    href: 'mailto:yenjcc@gmail.com',
    src: '/email.svg',
    alt: 'Email',
    username: 'yenjcc@gmail.com',
    label: 'Send email'
  }
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 bg-gradient-to-br from-blue-900 to-black-900 animate-fade-in">
      <div className="flex flex-col sm:flex-row w-full max-w-3xl bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col items-center justify-center p-6 sm:p-8 bg-gradient-to-br from-blue-700 to-blue-800 text-white sm:rounded-tl-lg sm:rounded-bl-lg">
          <Image
            src={profileImageUrl}
            alt="Profile Picture"
            width={100}
            height={100}
            className="rounded-full shadow-lg"
          />
        </div>
        <div className="flex flex-col items-center sm:items-start flex-1 p-6 sm:p-8">
          <p className="text-3xl sm:text-4xl font-bold text-center sm:text-left text-blue-300 dark:text-blue-200">
            Yen Colon
          </p>
          <p className="text-base sm:text-lg font-light text-center sm:text-left pt-2 text-blue-200 dark:text-blue-100">
            Software Developer
          </p>
          <div className="pt-4 w-full">
            <p className="text-xs sm:text-sm mb-3 text-gray-300 dark:text-gray-400 text-center sm:text-justify leading-relaxed">
              Software developer with over 4 years of experience in the field, possessing strong expertise in front-end and back-end software development. Started as a freelance developer, creating mobile apps and APIs for clients. Currently focused on Java, Kotlin, and JavaScript languages.
            </p>
          </div>
          <div className="pt-4 w-full">
            <div className="flex sm:space-x-4  justify-around items-center">
              {socialLinks.map(({ href, src, alt, label, username }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex flex-col items-center text-center w-20 sm:w-24 hover:text-blue-300"
                >
                  <div className="bg-white rounded-full p-2 shadow-lg flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 mb-2 hover:bg-blue-200">
                    <Image src={src} alt={alt} width={20} height={20} />
                  </div>
                  <span className="text-[10px] sm:text-xs text-gray-300 dark:text-gray-500">{username}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full text-center mt-8">
        <p className="text-xs sm:text-sm text-gray-300 dark:text-gray-500">
          &copy; {new Date().getFullYear()} Yen Colon. Todos los derechos reservados.
        </p>
      </footer>
    </main>
  );
}