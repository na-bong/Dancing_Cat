const CatSvg = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* 몸통 */}
    <ellipse cx="100" cy="130" rx="50" ry="40" fill="#FFADD2" />

    {/* 머리 */}
    <circle cx="100" cy="70" r="40" fill="#FFADD2" />

    {/* 왼쪽 귀 */}
    <polygon points="65,45 75,10 90,40" fill="#FFADD2" />
    <polygon points="70,40 77,20 85,38" fill="#FFCCE5" />

    {/* 오른쪽 귀 */}
    <polygon points="135,45 125,10 110,40" fill="#FFADD2" />
    <polygon points="130,40 123,20 115,38" fill="#FFCCE5" />

    {/* 얼굴 무늬 */}
    <ellipse cx="100" cy="75" rx="25" ry="20" fill="#FFF0F5" />

    {/* 왼쪽 눈 */}
    <ellipse cx="85" cy="65" rx="8" ry="10" fill="#FFFFFF" />
    <ellipse cx="85" cy="65" rx="5" ry="7" fill="#333333" />
    <circle cx="83" cy="63" r="2" fill="#FFFFFF" />

    {/* 오른쪽 눈 */}
    <ellipse cx="115" cy="65" rx="8" ry="10" fill="#FFFFFF" />
    <ellipse cx="115" cy="65" rx="5" ry="7" fill="#333333" />
    <circle cx="113" cy="63" r="2" fill="#FFFFFF" />

    {/* 코 */}
    <ellipse cx="100" cy="80" rx="5" ry="4" fill="#E91E63" />

    {/* 입 */}
    <path d="M100 84 Q95 92 88 88" stroke="#333" strokeWidth="2" fill="none" />
    <path d="M100 84 Q105 92 112 88" stroke="#333" strokeWidth="2" fill="none" />

    {/* 수염 */}
    <line x1="60" y1="75" x2="78" y2="78" stroke="#333" strokeWidth="1.5" />
    <line x1="58" y1="82" x2="78" y2="82" stroke="#333" strokeWidth="1.5" />
    <line x1="60" y1="89" x2="78" y2="86" stroke="#333" strokeWidth="1.5" />
    <line x1="140" y1="75" x2="122" y2="78" stroke="#333" strokeWidth="1.5" />
    <line x1="142" y1="82" x2="122" y2="82" stroke="#333" strokeWidth="1.5" />
    <line x1="140" y1="89" x2="122" y2="86" stroke="#333" strokeWidth="1.5" />

    {/* 앞발 */}
    <ellipse cx="70" cy="160" rx="12" ry="18" fill="#FFADD2" />
    <ellipse cx="130" cy="160" rx="12" ry="18" fill="#FFADD2" />

    {/* 발바닥 */}
    <ellipse cx="70" cy="168" rx="8" ry="6" fill="#FFCCE5" />
    <ellipse cx="130" cy="168" rx="8" ry="6" fill="#FFCCE5" />

    {/* 꼬리 */}
    <path
      d="M150 130 Q180 110 175 80 Q172 60 160 70"
      stroke="#FFADD2"
      strokeWidth="12"
      strokeLinecap="round"
      fill="none"
    />

    {/* 배 무늬 */}
    <ellipse cx="100" cy="140" rx="25" ry="20" fill="#FFF0F5" />

    {/* 볼 터치 */}
    <ellipse cx="70" cy="78" rx="8" ry="5" fill="#FFCDD2" opacity="0.7" />
    <ellipse cx="130" cy="78" rx="8" ry="5" fill="#FFCDD2" opacity="0.7" />
  </svg>
);

export default CatSvg;
