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
    <main className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-12 bg-gradient-to-br from-black-800 to-black-900">
      <div className="flex w-full max-w-4xl bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col items-start justify-center p-8 bg-gradient-to-br from-blue-700 to-blue-800 text-white rounded-tl-lg rounded-bl-lg shadow-inner">
          <Image
              src={profileImageUrl}
              alt="Profile Picture"
              width={150}
              height={150}
              className="rounded-full shadow-lg"
            />
        </div>
        <div className="flex flex-col items-center flex-1 p-8">
          <p className="text-4xl sm:text-6xl font-bold text-left text-blue-300 dark:text-blue-200">
            Yen Colon
          </p>
          <p className="text-lg sm:text-xl font-light text-left pt-2 text-blue-200 dark:text-blue-100">
            Software Developer
          </p>
          <div className="pt-4 w-full sm:w-4/5 lg:w-3/4">
            <p className="text-sm sm:text-base mb-3 text-gray-300 dark:text-gray-500 text-justify leading-relaxed">
              Software developer with over 4 years of experience in the field, possessing strong expertise in front-end and back-end software development. Started as a freelance developer, creating mobile apps and APIs for clients. Currently focused on Java, Kotlin, and JavaScript languages.
            </p>
          </div>
          <div className="pt-4 w-full sm:w-3/4">
            <div className="flex justify-evenly items-center">
              {socialLinks.map(({ href, src, alt, label, username }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex flex-col items-center text-center w-24 hover:text-blue-300"
                >
                  <div className="bg-white rounded-full p-2 shadow-lg flex items-center justify-center w-16 h-16 mb-2 hover:bg-blue-200">
                    <Image src={src} alt={alt} width={24} height={24} />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-300 dark:text-gray-500">{username}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full text-center mt-8">
        <p className="text-sm text-gray-300 dark:text-gray-500">
          &copy; {new Date().getFullYear()} Yen Colon. Todos los derechos reservados.
        </p>
      </footer>
    </main>
  );
}