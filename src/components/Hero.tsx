import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent animate-gradient">Kavishka</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-200">
              Mobile & Full Stack Developer
            </p>
            <p className="text-lg mb-12 max-w-2xl text-gray-300 leading-relaxed">
              Passionate about creating innovative mobile applications and robust web solutions
              that deliver exceptional user experiences with cutting-edge technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25 animate-glow"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-transparent border-2 border-blue-400 hover:bg-blue-400 hover:text-gray-900 text-blue-400 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-400/25"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="animate-fade-in-right">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-full border-2 border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 overflow-hidden">
                <div className="absolute top-4 right-4 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/3 right-8 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="m-3 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-emerald-500/20 p-1">
                  <img
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEBAQDxAVEA8QDw8VDw8VFxYVFRUWFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHR8tLS0tLS0tKy0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAABAgADBAUGB//EAEgQAAEDAgMDCAYGBggHAAAAAAEAAhEDBBIhMQVBUQYTImFxgZGxFDJSocHRIzNCYnLwc5KistLhFUNTVWOClPEkJTREhJPT/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EADMRAAICAQMDAgMHBAIDAAAAAAABAhEDEiExBEFREzIiYYEFFEJxkaHBUrHR4SPwM2Lx/9oADAMBAAIRAxEAPwD5UF7B5owTEMmBECCmAQmSFMCJiCgApgFAETGFMAhAwoGFAEQUEIGSEDJCAAgYUDC1s8O8geaKHY3NHi39ZvzRQahAM4SodkcyOB7EUNMjaZO73FPSw1LyA0zwSpgpIGHqRRVkLUqGKUgFQACgBSgYsJUAgWRxjBMApiCmAUxBTERMAoERMAoAKYBQMKYEQMdiYDd/uSAI7fcgYZ7fAJ8B+ZJ6z7khoSTx96CtgQgokIGh6fxHxTQGjEAPsnLOHZ+SqyNO5nf+LwJUNs1SQp7UrZVIE9aLYUgFKx0BAyJAAoAUoACBilAAQBUFicYwVAFAgpiYUxBTAiYgoAiYBCYBQAQExjIAiBjMdCaBqxsZQLSgtedyBuKfJA8pDUUAklBSSQIQUCEAQhAyxg6J/E34o7D7lxdS3Bx13ju3IdB8RHVWbmZ8d3gi14CpeSowdcuwBIpWJA653JFClIoVAAQACgAIACBgKAFQBWFkcYQmIKACmIKoQUARMQUwCgQQmAUDCExhQAUDGYmhMs5w/khO2LSRtQjThxStj0ojnb+PWmxpCHshSWhUFEhAEhAy5uTCfvjyKOwfiNFCXaATrO9JK9ipUt2CpVcQADHZ8UWL4UyrpwMzEZZnwRuWqEcHb5y0zRuNUVvB3qRlZQMiAAUAKgAIGBAAQBWsjjCExBQAUwCmSFMCBMQUAEJgFMQQgYQmMKACgZdS/DKCWWdLczf1fngqVktLuyPJ3sHxQ7HGl3E/yKSu/ICSNWjvCClT7k548G/qt+SdlaQOqE7h3NA8giylGhYUlGm3dhaXH2gMonSd85dypcEy3dFrXNcAS4ggaRPv0UujSKlwkLXqggROWv8AspMpbbGfnR/vmqNYrYR1TqHggsQu7PAJAISgZEgFKAFKAAgYEARAFQWJxjSmAMSLChpRYUGU7CiSnYqDKdiaGBVWSFMAhABCYDBAwpgFAx2dRIPUgX5jgfed4H5qhfQhaPace7f4pbDsXAfzKRVomHr80FIBHWgpAQMiQzQxs04aJdzkwMzGHWOCrsS9pWSnQcDDg5kkaiN+eqmty9aUW0y59uPsEuAImCDr2BNpXsTHI2tyuo8Akhz8t++EN+BRknsVOYIkh08TvR+ZpZU8DcCpKTK8B1hFDFSGAoAUoACBgKAAgCgOXNqObSEuQ5bAoi4lGovSTGjWGgz17stMASsZ53F0kaRwpqxBfn2VK6mT7FehHyH093sear15+BejHyH+kH+x5p/eMngPQh5LaV846tCuPVy/EiH0y7M1Ua4d1QuiGZT4MZYXHkuBWmonQMHKlITixgVSJGCYDtJGk9yYcjB7uLkWFIHS60DpBDj1pDSiwYiiyqIXIHQqCgJDNWzaHOOcJLYYTI+PUqirM8kqRZcUcJOHnCQ6DIgxAPjmUm0gjuuxU5jwCYeBOs9nvRZTcVzQHUXEeq4jLDJHanTZSkvJVVp4dWkTpmPzvUtUWnZXlOmSBljqbYlOkFsoKkoUpAKgYCgAFACoA49UuJMErxpt6mXGktxBj0k+Km35K+EJBH2j71VfMELP3iivmH0A4rNjAx0FOLpg1aHxFdCFSBKKHQ4OXd8VlNVIANeZ9YhKPPIMY1D7ZVOv6hfQmM+2dVWn/wBhX8i+1ccYlxORTVxktyXTXB1bZ5Oq9HBNy5OLLFR4N1IGMp7l0GNWMcZgCdUfkNV3Fh/E5Tv8UbjuIrgd6HfcqNPgUpFglIYJQBEDN+xHQ98/2Z8wrhyZZuDXc1BjfmPWO/7oWWX3BjXwoF3UHNxI+zvHsha/hMskX4Iyq3C3pDRu8eyqs0UWYNoPBwwQct3YFEzeCMZUGpcQMPAKuwu5ndG4ypKFKQClAAQMUoACAOTT39q8Z8scuxYkSJXGXih8FQe5lUGwdyQCoAcLpQiKgHGnd8QscnuYFTisxipAEJoC1jz2jgc1rGTolpG6zrFoLm54c309SB7TTw48F1YZ6U3H6r+UYZYKTSf0Z3rbptDmnJwXoxepWjil8LpjupO4+9U0xJxB6MZjLSUqZWtCikVNlWE0D1JWPUgMty6YiRu39qpKxOaQws3cR79OOielhrQtS0cBOR7OyeHWjSxqaH2eWguLmlwDcgM85Go3oiKd1sGsxpMtZUILt4Ayy4CJ1Qy4t92Vc3r9G7I5ngOvLtzU0Wn8xCRwPVn/ACSKSYCRnl2Z6IGK88BCBiIACQyFAxEABAAKAFQByqe9eK+SpDoJBV08UPgcTGVBsNuSARAFi6kIKYDDQ9nxCxye4Cp4WbGKkAUAMxaREy6hXNN7XjVp03Ebx2ESFpGbhJS8ESgpxcT1luxlMYWHoSS2eDswPAr2YxUNlweW3Ke75LedB1MKrQaWhhVbJOLUQnaFpfAjXNiMSikabkfUGUOG7j8ktIJMrFxhfiydr2Z9ya2HptBbfEEGNJ39v57lWoWgHpxiI4Z90fntRqH6aFsawYXEmJEA9qINLk0ST5Gu6wdGE8eOm5RJ22UopMoxZZ8R4JBT1fIDznlkEjRCoGAoAVAAQMBQAqBgQApSACBHHAnReM+TWxy0wM0ibRHCB4p9gW7MpUGo24JAKAmkA8rZTQElHqIQ7dD2fEKJSuVgCqBlGsZ/nshSy9qKVJIQhAM1aITC5D5oEesa6WU3e1TZnuyABjwXufgi/KR5cdpSXzYEiwSmBJQMhKAEJQIEoCySgYJQNDBItBSKIgYEDAUAIUABAyFACFIYCgBSgAIEcR5XiS5N0LiPFSMOIp0AE9LAYDROMbdCbLG0TqMwBn71qsTTtdiHNcMSrTLTB1Wc4uLplRkpK0IpKLKKFyAmpRJ2xpClSICAHYVadCe5ZRdLogmdI1nQK8fxS3Jlsj11fkrWdTFRtyyi2mwc42o9zQzhhwgyBvPUu7r8UsOmpPdcXwcPR545nLbh8+Tnf0G7+87T/wB7/wCBef6k/wCp/qd2mPgc7BfJ/wCZ2n+od/Cqlknfu/cFGPgH9AVP7zs/9Sfkl6k/6v3Hpj4NtDkVd1AHU7y2e0zhc24JBiQYgdR8Eepk8sVQ4opHJO4L20xfWhqPcGtYLkYiSYAA4k5I9XJ/V+4aY+DFQ5O3724mU3ObnmKjN3VimepP1cnlhoj4OTXfWpuLKhex41a7E0jKcwcxkl6uT+phoj4OlsaoXMqlxJLXUon7wfPkPBd/RzlJS1PijmzpRlGu9m4FdQkFBREDAgYCgBCgAJDIgBCgYCgBSkAEAcR68WXJshFIxlaAKtPcQzUo+4T4NdH1Xf5fMrqjwzCXuRTffWO7vJYdR/5DTD7EUALE1LaAzHd5hHcmXBopWvTaZyxCR1EpyXcrDNa4r5ma7o4HR1kKDo6jF6cqKQEznLaVAu0CtY5S4Ic0uTrcl7ObmmXiA0OeMQgHCMongSD3Lu+z8P8AzJy7b/ocf2hlrBLTy9v1NPKLaVCpV6THVQ1gDHsqhrc8zI5s5yeO5Z9f1HrZm1wtkPoOneHCk+Xuzg3L2F002OY2NHODzPaGjq3LiR3CVvWd+I+aufuZMeBFBR9F5DtcRbYGn/pLvEZME+kCCQBwWkISautiJyS2FvbO5pX9nUr021KQvLZ3PspODmtbUBwuO7IkxJnuypYpPhE64+TTybFN1rdc48lrvSMXOOhgGYwtg4hpqNxOW5Zmh8/vbVjCAysKoIzIZUbHbiA9ySA2bC+rrfjo+VRd/Q8T+hy9T74/X+DoArtJQUFEQMEpDASgBCgASgYEAApDFKAAUgAgDiPXjuLb2NkANTWNjsiGmnuBELkQ7U4+4T4Lm1YBHGD4FbqdWjNxvcrrvxOJ4x5LHK9UrLxrTGhFCLLKGo/O8JdyZcHSp0SRiEAAxJ465LTS2i+m6ec3rXCZn2o4Odkd6y0s7etzRnLYSzsnOOQkdRHkt8WGcnsjysuaMVydqys8D8xECYK9DFj0yPNy5tUTubJsmuBc6uKZyDA245o4YGpDTkcRkfdz6ufPmi0kdeDDJb8fSyivUhzg3aeUuibl5PR0k83rqJWKnh7xf6/6OjTk8/t/s5d3tGozpm5Ly0iAy5a86wIHN9XkmpYH+F/r/oNOTyv0/wBnPv8Aa4qgsqms9odIBqMiRkP6vglN4Le0v1X+BJZa5X6P/JiDqHsVf12fwKbweJfqv8DrL5X6P/J7/kRzR9HaKZJNpckFxno8+Q5pAG9xaZj7Mb1Nxv4b+pXxVuU8pKNuy5tGsDG1Rd2xbTa1zTgc4Yj6oDhLW5zxGRBUMpHe2fbMfZ8099ema1u7BVo06jm0zTc55zYM3OMdERMETJSqyW2i7aFkxzKgNxcMq0rmpVxc1WwVGGrUaygNJZoXOOQEHMZo3sL3PluxPq6346PlUXd0PEvoYdR7o/X+DoBdxKCkUCUDAgAFAxSkACgYEDAUgFKAAUABIDjb15cHUzbsGF0UIDgs8i2saFCxQDD4IVW7BjAq9UbJpiuOaibV7FLgg7Ekxm222fUMOw4W8XQPdqVShJ7m0elyTV1sdKvUa0Bo9VogfEnrWraWyO1zhjioR4RyK0ucTB14LJ7nnZJapNmixrFhzBhdODI4M48+NTR7vZZp3NPC71gIDh6wC9xacsPmfM59fT5L7WcfaWzdnUhUbirPLMQpsYZOMgAh0tygwfHivnckKVVw2v7H0+PIn8WpU0vkeKewjUEZTmIy4rA6E0+CApoZHGSTxKG7diSAkM+j8gIxW06eg1+v/uzPkqiTLg18oOT+K8t7rnWU2tdbjm35OcW1dG9xb3q0iUzRaWNrcWzGV31XHAXNqUXUy4Gm4zRbirOMvDiJMAFoyAyGbTY22X3+x6DqlW5NW5D6NS5dgAp828PqVHUySKhwsZmXE5uDmwBoinYWfNNi/V1f0lHyqru6HiX0/kw6j3R+v8G9pXaQgygokoGBAAJSAUoGLKQyIACQxUABAAQBxjqvI/EbdhpXXdqxAKl7qgEXLbRQSpAttLd1R4YwS46D4k7gqirdFQhKctMeTr1djtp9Ekvq4S50ZNaNw4krb0kuTtn0ehVy+WCztR67xA3N0HgmkkZ4cS98+B7i8z1k7huCGxzzuzHcvk9oEpM58krlZmxQpM7LKN0WnMSFcMjizKcFJHWtdrhvqHC7rlehDq41sefk6Nv3bo9ryY5UVZDatZ5ADGyIyaNBxIEnxUdT0rz4m8T+Pn5MiHUPp5xUl8HHzR7Jty6q0Yazi1xb0mlpOp3wYXyeTqOoxS0ZFT/I9+Ecc46obox3Fs7M8/W0B/q4066acOtytpDeKJ5Pbu1atvSbUNWoWl0OcKVB5GbhBDqQAGmZMzuXuTgkYtJHjn8srwk9OkRJjFbWpPf9EskiCyjy5vmxD6PRaWt/4a2EAuLiBFPIYiTHEymluBu5P8qLivfWjXUrV1R9zQaHm1oB042hvTawObuzBBG5FAVcrNvU78Me62p2mF75qtwl9TIAgBlNsgZZu8U+ORJFNntStRsjzLKT7dtQ0y+ra0S6aocYbUdiJjCd8jJOKTBnM2N9XV/SUf3aq7OiW0vp/JzdR7o/X+DcF2EIkpFElAwSgCEpDEJQAJQMiQxUABAwIACQzjO1Xjy5NUOumDuIgKgFK5ZLcoikD1XJqiKVE1iOnVJDDwa0gec+AXVgVLUe19m4lGDyPlke+CTvOpOcq2zacqbZzLy43BYtnk5p77GI1TwStnLYpeeBStiYcR4J2AcQ4eKdgN3BMTNVvWLYIcWkRBW+ObXDo5skFLlWdzZu3KzDk/U9IglsnrwkLplGHULTlSfzORReF6sba+R1au0q1VvNvrOpBxHSaXOLsiAJe5wjPhKyh9j4Iy1W1+hU/tPKlsk39Tz+3tnsDw6vXrvLmtAqijTLTlkAedbJWHUdNPG/K7M6un6uOaN8Ncrwc30K3/tbniP+GZ4/X9Y8VzbnTZZcbKo0452pcUcXq87bYMWmn0pnUeITpsDbyeNpbXdtcOuy5tCvSqObzLwSGODiBmROSFbBnd2ZtHZ1rTcyjX9IDqgfzdzScA0xDnMeym4tdAbuIMbolPS7JM3KC8O0W4adza0be3GPmgbkmYIxEmgMUCQAB7yi3fAJUeb2R9XV/S0f3aq7uj9svp/Jz9R74/k/4Kto1HBzQ1xGW49ajqJS1pJ0XiS0tsyurVB9s+K53LLHuapRfYHpVT2yl6uTyGmPgPplT2vJHrZfIaI+CC8qe17gn6+XyGiIfTanEeAT+8ZA0RD6c/q8EfecgaET09/V4I+9ZA0I30X4mgnUhd2OWqKbM3sxlQAKBgSEcZ2q8h8m4zFtifYTCrYCuWM+RkWYHsbURa24/wAMnxcT8V2w9iPpelVdPH8jnXVSJUSZydRKjj13yVk2eRN2yuUrMwh54osAioeKdsA84eKLYBDk7Ea7eoujHI58kTW2mNQC3rGnhouhRj22Odyl33N1q9xgE5MBg788s10423Sb4OfIoq2lyes2YA6kGHc3CDwygLueOM4aWeR95ydN1HrQ/wDvkl9TYHMa5jXzAcAWEjfmCRBzBXh5Wsc3GXY+4wddhz41kXDOdY7esQ11K5IJZUDWh1EvIZ0Q8E4c4IMb8hmVxzcb2MctOVx4LKO2dkZFzaEnFI9F7Yj6OOH7OWTsUkUzw/KF1v6RU9D+o6OA9KJgYsIeMQEzkZ7U9TQJeSrYwYav0ubeauY39PmanN/t4URtsJcF+yfqqn6Sl+7UXd0ftl9Dl6j3x/J/wUbQP0g/D8SozP8A5F+Rri9hQ08e4JRd8lMlVmUhRkhtaCL7FKwNAIAikCIAiBnUtPUb2L0sPsRhLktlaiAkMCQzju1Xkvk2C0qsbpgwlayYhSVjJjLqdo9zDUawljXBrnASASJAPBKi445SVpbI9PSuWG3pAOBcymA5siQR1LqhJaUe/wBNkh6EVe6Rybp8qJM4OolZzamqyZ5shUhETAKAImIIKALqblcWRJGygOAIPFuR8AQuqC8fsc035/c6Vm7I5z0hnHDuHxXbgOTOj0my60QvRgzxepgUctrmpSpUq1IU/XLKmOlSqTIludRpiId4ry/tXHtHIvyO77CzPVPC/wA1/J407frHVluf/Ftf/kvFs+jooudpuqEOdSoggR0aTGDfuYAJz1VKVdgoqN1/h0/1f5o1fIKHpX2GSKVMEtcA6HSMQgkdKJgkZ8eMENTrsFGvZX1VT9LS/dqLt6P2y/NfycfUe9fk/wC6M19nUH4R5lZ5leX6G2L2FBPSy0U6vipF1saHDonsW8l8LM1yYlwG5EARIAIGRIDqWp6Dexenh9iMJclpK0ECUhglAHIcvJfJuBIBpV2AFLA7fJu7DW1qbjGMNI7p+YWmOVWj1fszKouUX3Ml6yHGFEl4M+pjUnRiNUpWzhc2TnSiybJzn5yT1MLJznUEahExjgjUAMSLAmNGoBhV6k1KhUWC7I0A81azyRHpRNuy717qkOMiDkurpM85ZKfBz9TiioWkep2fXg56L28bPDzwtHfugKlBzWuBORG/T+Up54a8bRy9BlfT9VGUltw/qeaIHALx0kfbMQ0m72tPcFWleCGxTa0zrTZ+q35J+nF9jNyFNjS/smfqhHow8Izc2UXtJlOl0Whs1WzA+6/VWoxxx2VbnNkblkX5P+6PP356f+ULz+odZPodWFfCU0gpxLc0lwa3er3Lql7TBcmALz0dIUCAgZEgIgDp23qN7F6WH2IwlyWLQQEASUhnJcvKZuBICJgPSplxAGpRQ4xcnSOlToBhgNnL6zPPsHznuQuTvw41CXH1KKZAquB0M66Sc1Sq9yE1HO0+GU1WDERuSa3OecVraKnNSozaoWEhEQBEASEwJCKAsp0p3x7/ACVxx6iXKjQ6xim55JkDcOjrGZ1HgtpdNpg5MyWa5KJVY1MLp6is8EtM7Lyx1Ro7+zb7pBex0+e3TPL6jBse22bWxhoGQBk9a9RbnzueLg2zyXKoVbWvDT9FUl1LIZe03uJ8CF4XVqWHJXZ8H1H2b1r6nCm/dHZ/5+pzLTbRDvpQHNg9EZEndmsIZ6fxcHbk1uPw8jN2u8mA0dsGFaz3wiWmuWXjaT/tMEcR/N2Sv1pd0Zvfhi17nHAJw5+rAzPeM+5OWTVtdGdO7o4l+2HkcAFwZV8dHXjdxsRhA4q4NIcrZZVrgtgaq8mVaaIjBp2ZguQ2JKYiJDAgAoA6Vv6jexeli9iOeXJZKsQJQMCAOWV5TOggCQHQttlPOb+iOG/+SLOrH0snvLY6VK1DRAaizrjhUVsi3m+pFlKLRxa+VQdYTZz5dsy+YtVg4QpJnCPgzuTs5ZIRBBJTAkoAMoAkp2gLaVYN+zK0hlUexEoau5oqbTJY6ngADgJOZOs5eC1n1blBwrkyj0yU1K+DHS39i54cm7NVu8grqxycWYZI2j2XJ++0Er3OnyakfP8AXYDu7asmXVAhwksl7CNQQD4yNyvqcEcsKfbg87os8unzbcPZniGbILn4Gsl+YgcRqvCjjuWmtz6x5Ph1J7HRZyPrH1Wx1B4+OS6/uEqtf3OCf2vig6k/2OZV2W4SC+YyIkH3jVc8sTWzZ2wzqW6RmqWG7HlvGZ90pRwau+xp6yS43MteiMWVN8cZA90ZKMmJatosuM9t2ivmhva8dwPwUaEuzL1fNCOYzrHcPmocYd7GnIAps9r3fzS0Q8juXghot9oftfwo9KPkNT8E9HHtN8fmEekvIa/kT0U8Ru3t36b0eg/Ia0A2j9wnsg+Sl4Z9lYepHuzc2m5rWhwLTAyK78cXGKTMXJSdpklUACUDJKQHMK8pnQdii6lTAwiTAl5Ofdlkotnp4lhgk1yOb5vA+J+SNzT1YFz67R7RyG/qStmj0i+lt4H896LJtHO2hq1w4rU5eq2cZC1CpFIzPQc0hCmZsCBEQAUARAyIAhQIegcz2ILg6e5cF045ajHJGuDqbMusJC9Dp8ulnn9Ri1I9vse9xAD5r2ISs+d6rAo7nmbq/NG5dUDix+KrGQcI5x7RI7AF4OafpZm1z/s+k6da+nUXuqX9kaavK2o5pYaoaCIJbTIJG8SXGO5U+vk1V/scr+ysWvXp3+bOW+8BMhw7C0x3rmlns9HFijj5RmNw/wC4f1h8Efepor0oMrdeOGrAewn5I++vwP7tEU343sPcVa635Evpl5D/AEizg4d6f3yPgX3d+Qi+pb58JVLqsb5Qngn2YwrUju/ZCfrYXyv2F6WVcMdvM8I7vkrUun8Ccc3kdtOid/7ytfd3/wBZDeZf9R29j7HAaa4biaThZJ1cI3cACNdZW2OGOC1RPP6rqpX6bdP+DRf7OFVsEQ4eq/LX5JyjqOfB1LxSu9vB5W5oOpuLHiHN13rlarY92E1OKlHhlJSLAgD/2Q=="
                    alt="Kavishka Rasara - Mobile & Full Stack Developer"
                    className="w-full h-96 object-cover rounded-full hover:scale-105 transition-transform duration-700 filter brightness-110 contrast-110"
                  />
                </div>
                <div className="absolute -top-2 left-1/4 w-8 h-8 bg-blue-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-blue-500/30 animate-float">
                  <span className="text-blue-400 text-xs font-bold">JS</span>
                </div>
                <div className="absolute -bottom-2 right-1/4 w-8 h-8 bg-emerald-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-emerald-500/30 animate-float-delayed">
                  <span className="text-emerald-400 text-xs font-bold">⚛</span>
                </div>
                <div className="absolute top-1/2 -left-2 w-8 h-8 bg-purple-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-purple-500/30 animate-float">
                  <span className="text-purple-400 text-xs font-bold">TS</span>
                </div>
                <div className="absolute top-1/2 -right-2 w-8 h-8 bg-pink-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-pink-500/30 animate-float-delayed">
                  <span className="text-pink-400 text-xs font-bold">📱</span>
                </div>
              </div>
              <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-64 h-16 bg-gradient-to-t from-blue-500/10 to-transparent rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-blue-400" />
      </div>
    </section>
  );
};

export default Hero;