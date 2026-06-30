function FloatingCookies() {
    const cookies = [
      { left: "6%", top: "10%", size: 26, delay: "0s", duration: "7s" },
      { left: "18%", top: "22%", size: 18, delay: "1s", duration: "9s" },
      { left: "82%", top: "12%", size: 24, delay: "2s", duration: "8s" },
      { left: "90%", top: "30%", size: 20, delay: "0.5s", duration: "10s" },
      { left: "10%", top: "42%", size: 22, delay: "1.5s", duration: "8s" },
      { left: "30%", top: "55%", size: 16, delay: "2.5s", duration: "11s" },
      { left: "75%", top: "50%", size: 20, delay: "1s", duration: "9s" },
      { left: "88%", top: "65%", size: 28, delay: "3s", duration: "12s" },
      { left: "14%", top: "74%", size: 18, delay: "0.8s", duration: "10s" },
      { left: "52%", top: "18%", size: 16, delay: "1.2s", duration: "7.5s" },
      { left: "58%", top: "34%", size: 24, delay: "2.2s", duration: "9.5s" },
      { left: "43%", top: "68%", size: 22, delay: "0.3s", duration: "8.5s" },
      { left: "66%", top: "80%", size: 18, delay: "1.8s", duration: "10.5s" },
      { left: "4%", top: "88%", size: 24, delay: "2.8s", duration: "12s" },
      { left: "94%", top: "84%", size: 20, delay: "0.6s", duration: "9s" },
      { left: "37%", top: "8%", size: 18, delay: "1.6s", duration: "8s" },
      { left: "70%", top: "24%", size: 14, delay: "2.6s", duration: "7s" },
      { left: "24%", top: "88%", size: 26, delay: "1.1s", duration: "11s" },
    ]
  
    return (
      <div className="floating-cookies" aria-hidden="true">
        {cookies.map((cookie, index) => (
          <span
            key={index}
            className="cookie-float"
            style={{
              left: cookie.left,
              top: cookie.top,
              fontSize: `${cookie.size}px`,
              animationDelay: cookie.delay,
              animationDuration: cookie.duration,
            }}
          >
            🍪
          </span>
        ))}
      </div>
    )
  }
  
  export default FloatingCookies