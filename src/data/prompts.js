export const prompts = [
  {
    id: "claymation",
    title: "Claymation World",
    description: "손으로 빚은 듯한 따뜻한 점토 애니메이션 스타일",
    image: "/thumbnails/claymation.png",
    prompt: `시각적 언어 (질감 및 형태):

모든 요소(캐릭터, 아이콘, 배경, 그래프, 심지어 텍스트 박스까지)가 실제 색색의 점토로 만들어진 것처럼 표현되어야 한다.
표면은 매끄럽기보다는 약간의 불규칙함과 손가락 지문 자국이 느껴지는 매트한 질감이어야 한다.
모서리는 날카롭지 않고 둥글둥글하며 부드럽게 마감되어야 한다.

색상 및 조명:

채도가 낮고 부드러운 파스텔 톤(예: 연보라, 민트, 크림색, 베이비 블루)을 주조색으로 사용하여 포근한 분위기를 연출하라.
따뜻하고 부드러운 조명(soft lighting)을 사용하여 깊이감과 입체감을 더하고, 그림자 역시 부드럽게 퍼지도록 하라.

콘텐츠 구조 및 배치:

복잡한 텍스트보다는 점토로 만든 직관적인 아이콘과 캐릭터를 중심으로 내용을 시각화하라.
텍스트는 마치 점토판 위에 새겨지거나, 다른 색깔의 점토로 글자를 빚어 붙인 듯한 입체적인 형태로 디자인하라.

이미지 묘사 가이드: 모든 이미지 생성 요청 시 다음 키워드를 반드시 포함하라.

style: handmade claymation
texture: matte clay, fingerprint details, soft dough
lighting: soft, warm, diffuse
colors: soft pastel palette, muted tones
shapes: rounded corners, soft edges`
  },
  {
    id: "visual-thinking",
    title: "Visual Thinking",
    description: "화이트보드에 마커로 그린 역동적인 비주얼 싱킹",
    image: "/thumbnails/visual-thinking.png",
    prompt: `너는 복잡한 개념을 단번에 시각화하는 비주얼 씽킹(Visual Thinking) 전문가야. 네 목표는 실제 '강의실 화이트보드에 마커로 역동적으로 판서한 듯한' 날것의 생동감이 느껴지는 슬라이드를 구성하는 것이다.

시각적 언어 (마커 및 레이아웃):
실제 화이트보드 마커(검정, 빨강, 파랑)의 거친 필압과 질감을 그대로 재현하라.
모든 텍스트 표현은 손글씨 형태로 표현하라
정형화된 레이아웃 대신, 화살표, 번개 모양, 밑줄, 동그라미 등을 사용해 아이디어의 흐름을 역동적으로 표현하라.
실제 화이트보드의 테두리와 받침, 지우개와 보드마카가 보이는 화이트보드를 표현하라. 완전히 지워지지 않은 마커 자국(Smudge) 같은 디테일을 포함하여 현장감을 높여라.

캐릭터 및 일러스트 (두들 스타일):
깔끔한 아이콘 대신, **익살스러운 표정의 캐릭터나 비유적인 낙서(Doodle)**를 적극 활용하라. (예: 짐을 지고 가는 사람, 발사되는 로켓, 톱니바퀴에 낀 사람 등)
복잡한 명암보다는 마커의 선(Stroke)만으로 형태를 표현하라.

색상 및 강조:
배경은 약간의 광택이 있는 화이트보드 재질로 설정하라.
검정색은 기본 텍스트, 빨간색은 병목 현상이나 주의사항, 파란색은 해결책이나 미래 방향성을 나타내는 데 사용하라.

이미지 묘사 가이드: 모든 이미지 생성 요청 시 다음 키워드를 반드시 포함하라.

style: authentic whiteboard drawing, hand-drawn marker sketch
details: dry-erase marker texture, felt-tip pen strokes, whiteboard frame visible
colors: classic marker colors (black, vibrant red, blue) on white background
vibe: energetic, educational, high-speed brainstorming, casual doodle
elements: arrows, scribbles, expressive cartoon characters`
  },
  {
    id: "cyberpunk",
    title: "Cyberpunk Neon",
    description: "네온 사인과 미래적인 도시의 어두운 사이버펑크 스타일",
    image: "/thumbnails/cyberpunk.png",
    prompt: `시각적 언어 (미래지향적 및 기술적):
어두운 배경과 대비되는 강렬한 네온 빛을 사용하여 미래적인 기술 사회를 표현하라.
홀로그램 인터페이스, 글리치(Glitch) 효과, 디지털 노이즈를 시각적 요소로 활용하라.
텍스트와 데이터는 헤드업 디스플레이(HUD)나 터미널 코드처럼 보이도록 디자인하라.

색상 및 조명:
딥 퍼플, 다크 블루, 블랙을 배경으로 사용하고, 핫 핑크, 사이언(Cyan), 네온 그린을 강조색으로 사용하라.
조명은 날카롭고 강렬해야 하며, 젖은 아스팔트에 반사된 네온 사인의 느낌을 살려라.

콘텐츠 구조:
정보는 모듈식 패널이나 플로팅 윈도우 안에 배치하라.
배경에는 흐릿한 사이버펑크 도시 풍경이나 회로 기판 패턴을 은은하게 깔아라.

이미지 묘사 가이드:
style: cyberpunk aesthetic, futuristic sci-fi
lighting: neon glow, volumetric lighting, high contrast
colors: cyan, magenta, deep purple, black
details: holographic overlay, glitch effects, digital noise, circuit patterns`
  },
  {
    id: "swiss-style",
    title: "Swiss International",
    description: "엄격한 그리드와 산세리프 서체의 스위스 디자인",
    image: "/thumbnails/swiss-style.png",
    prompt: `시각적 언어 (질서와 명료함):
엄격한 수학적 그리드 시스템을 기반으로 요소를 배치하여 절대적인 질서와 균형미를 추구하라.
장식적인 요소를 배제하고, 여백(Negative Space)을 적극적으로 활용하여 시각적 긴장감을 주어라.
서체는 헬베티카(Helvetica) 풍의 굵고 간결한 산세리프(San-serif)만을 사용하라.

색상 및 강조:
흰색 배경이나 미색 배경을 사용하고, 검정색 텍스트로 가독성을 극대화하라.
강조색은 오직 '인터내셔널 레드(Red)' 또는 강렬한 '로열 블루' 한 가지만을 사용하여 포인트를 주어라.

콘텐츠 구조:
텍스트는 좌측 정렬(Ragged Right)을 원칙으로 하며, 제목은 압도적으로 크게 배치하라.
이미지와 텍스트의 크기 대비를 극적으로 주어 시각적 위계를 명확히 하라.

이미지 묘사 가이드:
style: swiss international style, modernist graphic design
composition: strict grid system, asymmetry, negative space
colors: white, black, international red
typography: bold sans-serif, large scale headings
vibe: clean, rational, objective, minimalist`
  },
  {
    id: "vaporwave",
    title: "Retro Vaporwave",
    description: "80년대 레트로 감성과 초현실적인 베이퍼웨이브",
    image: "/thumbnails/vaporwave.png",
    prompt: `시각적 언어 (레트로 퓨처리스크):
80년대와 90년대의 초기 컴퓨터 그래픽, 윈도우 95 UI 요소, 고전 조각상(다비드상 등)을 혼합하여 초현실적인 콜라주를 만들어라.
야자수, 돌고래, 체커보드 바닥 패턴, 일본어 텍스트 등을 장식적 요소로 활용하라.
VHS 테이프의 지직거리는 노이즈나 스캔라인 효과를 텍스처로 입혀라.

색상 및 조명:
파스텔 핑크, 민트 그린, 라일락 퍼플 등 몽환적인 그라데이션을 배경으로 사용하라.
석양(Sunset) 느낌의 주황색과 보라색 그라데이션을 적극 활용하라.
조명은 현실적이라기보다는 디지털적이고 인공적인 느낌을 주어라.

이미지 묘사 가이드:
style: vaporwave, retrowave, aesthetics, 80s surrealism
elements: greek statues, tropical plants, checkerboard grid, old computer UI
colors: pastel pink, cyan, purple gradient, sunset gradient
texture: VHS noise, scanlines, glitchy, low-fi digital`
  },
  {
    id: "blueprint",
    title: "Technical Blueprint",
    description: "정교한 설계도면과 청사진 스타일",
    image: "/thumbnails/blueprint.png",
    prompt: `시각적 언어 (공학적 및 정밀함):
전체적인 배경을 짙은 파란색(Blueprint Blue)의 모눈종이(Grid paper) 패턴으로 설정하라.
모든 그림과 다이어그램은 흰색의 얇고 일정한 선(Line art)으로만 표현하며, 내부는 채우지 않거나 빗금(Hatching)으로 명암을 표현하라.
치수 보조선, 각도 표시, 축척(Scale) 표시, 기술적인 주석 등을 장식적으로 추가하여 설계도면의 느낌을 살려라.

서체 및 텍스트:
손으로 제도한 듯한 고딕체나 타자기 폰트(Monospace)를 사용하라.
제목과 중요 데이터는 박스로 감싸거나 굵은 선으로 강조하라.

이미지 묘사 가이드:
style: engineering blueprint, architectural schematic, technical drawing
colors: blueprint blue background, white lines
lines: thin, precise, uniform weight, wireframe
details: measurements, dimensions, grid, cross-hatching, handwriting annotations`
  },
  {
    id: "paper-cutout",
    title: "Paper Cutout",
    description: "여러 겹의 종이를 오려 붙인 듯한 입체적인 컷아웃",
    image: "/thumbnails/paper-cutout.png",
    prompt: `시각적 언어 (깊이감과 공예):
다양한 색상의 색종이를 가위로 오려 겹겹이 쌓아 올린 듯한(Layered Paper) 입체적인 구성을 만들어라.
각 종이 레이어 사이에 짙고 부드러운 그림자(Drop Shadow)를 주어 확실한 원근감과 깊이감을 표현하라.
종이의 가장자리는 너무 매끄럽기보다는 약간의 질감이 살아있도록 표현하라.

색상:
유기적이고 자연스러운 어스 톤(Earth tone)이나 채도가 높은 원색을 사용하여 경쾌한 느낌을 주어라.
단색 색종이뿐만 아니라 패턴이 있는 종이 질감도 부분적으로 활용하라.

콘텐츠 구조:
텍스트는 종이 위에 인쇄된 것처럼 보이거나, 별도의 종이 조각에 적혀 붙여진 것처럼 표현하라.

이미지 묘사 가이드:
style: paper cutout art, layered paper craft
texture: paper grain, slight roughness
lighting: strong drop shadows, depth of field, top-down lighting
vibe: handmade, crafty, playful, dimensional
colors: vivid overlapping paper layers`
  },
  {
    id: "watercolor",
    title: "Watercolor Dream",
    description: "물이 번지는 듯한 투명하고 감성적인 수채화 스타일",
    image: "/thumbnails/watercolor.png",
    prompt: `시각적 언어 (유동성과 투명함):
젖은 종이 위에 물감이 자연스럽게 번지고 스며드는 효과(Wet-on-wet)를 배경과 요소에 적용하라.
경계선은 뚜렷하지 않고 부드럽게 그라데이션되거나 얼룩진 느낌을 살려라.
정형화된 도형보다는 불규칙한 붓터치와 물감 자국을 디자인 요소로 활용하라.

색상:
맑고 투명한 수채화 물감의 느낌을 살려, 흰색 배경에 파스텔 톤이나 맑은 원색을 묽게 사용하라.
색이 겹치는 부분은 셀로판지처럼 색이 섞이는 효과를 표현하라.

텍스트:
만년필로 쓴 듯한 캘리그래피나 세리프 폰트를 사용하여 서정적인 분위기를 더하라.

이미지 묘사 가이드:
style: watercolor painting, artistic, expressive
technique: wet-on-wet, ink wash, brush strokes, paint splatter
texture: textured watercolor paper
edges: soft, bleeding, organic, undefined
colors: translucent, light, airy, pastel blends`
  },
  {
    id: "pixel-art",
    title: "8-Bit Pixel Art",
    description: "고전 레트로 게임의 향수를 자극하는 픽셀 아트",
    image: "/thumbnails/pixel-art.png",
    prompt: `시각적 언어 (디지털 레트로):
모든 이미지와 아이콘을 8비트 또는 16비트 도트(Dot) 그래픽으로 표현하라. 해상도가 낮은 듯한 거친 계단 현상을 의도적으로 살려라.
UI 요소(버튼, 창, 게이지)는 고전 RPG 게임의 인터페이스 스타일을 모방하라.

색상:
제한된 색상 팔레트(Color Palette)를 사용하여 레트로한 느낌을 극대화하라. (예: 게임보이 그린, CGA 4컬러 등)
채도가 높고 명료한 색상을 사용하여 팝하고 경쾌하게 표현하라.

텍스트:
픽셀 폰트(Bitmap Font)를 사용하여 전체적인 통일감을 주어라.

이미지 묘사 가이드:
style: 8-bit pixel art, retro video game graphics
resolution: low resolution, blocky details
colors: limited palette, vibrant, high contrast
elements: sprites, game UI, hearts, coins, scanlines
vibe: nostalgic, playful, arcade`
  },
  {
    id: "film-noir",
    title: "Film Noir",
    description: "어둡고 미스터리한 흑백 영화 스타일",
    image: "/thumbnails/film-noir.png",
    prompt: `시각적 언어 (그림자와 드라마):
1940년대 누아르 영화처럼 흑백(Black & White) 톤을 기본으로 하되, 빛과 그림자의 극적인 대비(Chiaroscuro)를 활용하라.
블라인드 사이로 들어오는 빛 줄기, 자욱한 담배 연기, 비에 젖은 거리 등의 분위기를 연출하라.
화면의 구도는 기울어지거나(Dutch Angle) 그림자가 길게 드리워진 불안정한 구도를 사용하여 긴장감을 주어라.

색상:
완전한 흑백에 가깝게 처리하되, 강조하고 싶은 아주 중요한 정보에만 짙은 빨간색이나 노란색을 포인트로 아주 적게 사용하라.

텍스트:
타자기 폰트나 빈티지한 영화 포스터 서체를 사용하여 거친 느낌을 주어라.
중요한 단어는 사건 파일의 기밀 문서 도장처럼 표현하라.

이미지 묘사 가이드:
style: film noir, classic cinema look, black and white photography
lighting: dramatic shadows, high contrast, venetian blind lighting, harsh spotlight
atmosphere: mysterious, gritty, cinematic, suspenseful
elements: detectives, rainy streets, smoke, files, vintage styling`
  },
  {
    id: "abstract-3d",
    title: "Abstract 3D Memphis",
    description: "원색의 기본 도형들이 떠다니는 멤피스 스타일 3D",
    image: "/thumbnails/abstract-3d.png",
    prompt: `시각적 언어 (기하학과 유희):
구, 원뿔, 육면체, 원기둥 같은 기본적인 3D 기하학 도형들이 공중에 떠다니거나 불규칙하게 쌓여있는 구성을 만들어라.
재질은 매끈한 플라스틱, 세라믹, 혹은 약간의 질감이 있는 테라조(Terrazzo) 패턴을 혼합하여 사용하라.
배경에는 2D의 기하학적 패턴(지그재그, 물결, 점)을 배치하여 3D와 2D의 조화를 꾀하라.

색상 및 조명:
멤피스 디자인 특유의 밝고 경쾌한 원색(노랑, 파랑, 분홍, 검정 그래픽 패턴)을 과감하게 사용하라.
조명은 밝고 고르게 비추어 그림자를 부드럽게 만들고, 전체적으로 화사한 스튜디오 조명 느낌을 주어라.

이미지 묘사 가이드:
style: 3D memphis design, abstract geometric art
shapes: primitive 3D shapes (cones, spheres, cubes), squiggles
texture: matte plastic, ceramic, terrazzo patterns
colors: bright pop colors, pastel background, playful contrast
composition: floating elements, scattered arrangement, balanced chaos`
  },
  {
    id: "vintage-botanical",
    title: "Vintage Botanical",
    description: "오래된 식물 도감 같은 클래식하고 차분한 스타일",
    image: "/thumbnails/vintage-botanical.png",
    prompt: `시각적 언어 (자연과 역사):
배경은 세월의 흔적이 느껴지는 빛바랜 양피지나 낡은 종이 질감(Aged Paper)으로 설정하라.
이미지는 19세기 식물 도감에서 볼 법한 정교한 펜화(Pen & Ink)나 에칭(Etching) 판화 스타일로 표현하라.
식물, 곤충, 해부도 등의 자연물 일러스트를 프레임이나 장식 요소를 감싸는 데 활용하라.

색상:
채도가 낮고 차분한 올리브 그린, 앤티크 브라운, 세피아 톤을 사용하여 고풍스러운 분위기를 연출하라.
약간의 물빠진 듯한 수채화 채색을 더해 생기를 주되 튀지 않게 하라.

텍스트:
우아한 세리프(Serif) 서체나 흘림체(Script)를 사용하여 고전적인 서적의 느낌을 살려라.

이미지 묘사 가이드:
style: vintage botanical illustration, antique scientific drawing
texture: aged parchment, yellowed paper texture
technique: intricate line work, engraving, etching, cross-hatching
subjects: flora, fauna, herbs, flowers
colors: sepia, muted greens, desaturated earth tones`
  },
  {
    id: "glassmorphism",
    title: "Holographic Glass",
    description: "투명한 유리와 빛의 굴절을 이용한 현대적인 글래스모피즘",
    image: "/thumbnails/glassmorphism.png",
    prompt: `시각적 언어 (투명성과 깊이):
배경이 은은하게 비치는 반투명한 '프로스트 글래스(Frosted Glass)' 패널을 사용하여 정보를 담아라.
유리의 가장자리는 얇은 흰색 테두리로 빛나게 하여 구분감을 주어라.
배경에는 몽환적인 오로라나 움직이는 빛의 덩어리들이 흐릿하게 보이도록(Blur) 하라.

색상 및 조명:
홀로그램 같은 무지개빛 그라데이션, 파스텔 블루와 퍼플이 섞인 몽환적인 색감을 사용하라.
빛이 유리에 굴절되어 생기는 산란광(Caustics)이나 반짝임을 표현하여 신비로운 느낌을 주어라.

텍스트:
아주 얇고 깔끔한 산세리프 폰트를 흰색으로 사용하여 투명한 유리 위에서 가독성을 확보하라.

이미지 묘사 가이드:
style: glassmorphism, holographic UI, frosted glass
materials: translucent glass, blur mechanics, light refraction
colors: iridescence, gradients, soft pastels, white gloss
lighting: glowing, ethereal, ambient light, backlit
vibe: modern, clean, premium, futuristic`
  },
  {
    id: "chalkboard",
    title: "Chalkboard Class",
    description: "학창 시절의 향수를 부르는 칠판과 분필 스타일",
    image: "/thumbnails/chalkboard.png",
    prompt: `시각적 언어 (교육과 아날로그):
배경은 짙은 녹색이나 검은색의 거친 칠판 질감으로 설정하고, 분필 가루가 묻어 뿌연 느낌을 사실적으로 표현하라.
모든 텍스트와 그림은 흰색, 노란색, 분홍색 분필로 칠판에 적은 듯한 질감(Chalk texture)으로 표현하라.
중요한 내용은 분필로 두껍게 덧칠하거나 밑줄을 그어 강조하라.

일러스트:
손으로 대충 그린 듯한 다이어그램, 졸라맨 캐릭터, 수학 공식 등을 낙서처럼 배치하라.
지우개로 지우다 만 자국을 남겨 자연스러운 현장감을 주어라.

이미지 묘사 가이드:
style: realistic blackboard art, chalk drawing
texture: dusty chalkboard slate, grainy chalk strokes
colors: dark green/black board, white/yellow/pink pastel chalk
technique: hand-drawn, sketching, smudging, shading with chalk lines
vibe: educational, academic, nostalgic, handmade`
  },
  {
    id: "industrial",
    title: "Industrial Grunge",
    description: "거친 금속과 콘크리트 질감의 인더스트리얼 스타일",
    image: "/thumbnails/industrial.png",
    prompt: `시각적 언어 (거칢과 견고함):
녹슨 금속판, 갈라진 콘크리트 벽, 철망(Mesh) 등의 거친 텍스처를 배경으로 사용하라.
주의 표시를 나타내는 노란색과 검은색의 사선 스트라이프(Hazard stripes)를 장식 요소로 활용하라.
볼트, 너트, 리벳 자국, 스프레이 페인트 자국 등을 디테일로 추가하라.

색상:
검정, 회색, 짙은 갈색 등 무거운 색상을 주조색으로 사용하고, 안전 노랑(Safety Yellow)이나 형광 오렌지로 강렬한 포인트를 주어라.

텍스트:
스텐실(Stencil)로 찍어낸 듯한 군대식 폰트나 굵고 투박한 고딕체를 사용하라.
텍스트가 닳거나 벗겨진 듯한 효과(Distressed)를 주어라.

이미지 묘사 가이드:
style: industrial grunge, brutalism, urban decay
textures: rusted metal, concrete, corrugated iron, peeling paint
elements: hazard stripes, rivets, chains, gears, stencil text
colors: metallic greys, rust orange, caution yellow, black
vibe: heavy, durable, weathered, intense`
  },
  {
    id: "pop-art",
    title: "Pop Art Comic",
    description: "만화책의 한 장면 같은 강렬한 팝아트 스타일",
    image: "/thumbnails/pop-art.png",
    prompt: `시각적 언어 (과장과 유머):
미국 코믹북 스타일의 굵고 검은 윤곽선(Outline)을 사용하여 이미지를 명확하게 표현하라.
명암은 그라데이션 대신 벤데이 점(Ben-Day dots) 패턴이나 사선 빗금으로 표현하라.
대사는 말풍선(Speech Bubble)이나 효과음 박스(물결 모양, 폭발 모양) 안에 넣어라.

색상:
빨강, 노랑, 파랑 등 채도가 가장 높은 원색(Primary Colors)을 사용하여 시선을 사로잡아라.
색상 간의 대비를 극대화하여 역동적인 화면을 구성하라.

일러스트:
인물은 드라마틱한 표정의 클로즈업 샷으로 표현하고, 행동을 강조하는 과장된 움직임 선(Action lines)을 추가하라.

이미지 묘사 가이드:
style: pop art, roy lichtenstein style, retro comic book
technique: thick black outlines, ben-day dots shading, flat colors
colors: primary red, yellow, blue, high saturation
elements: speech bubbles, action bursts, sound effects (POW! BAM!)
vibe: energetic, bold, graphic, humorous`
  },
  {
    id: "low-poly",
    title: "Isometric Low Poly",
    description: "단순화된 면으로 구성된 귀여운 3D 로우 폴리곤 세상",
    image: "/thumbnails/low-poly.png",
    prompt: `시각적 언어 (단순함과 입체감):
모든 사물과 환경을 삼각형과 사각형 폴리곤(Polygon)의 조합으로 단순화하여 표현하라. 곡선보다는 각진 형태를 강조하라.
시점은 45도 각도에서 내려다보는 아이소메트릭(Isometric) 뷰를 사용하여 미니어처 세상 같은 느낌을 주어라.
텍스처를 배제하고 면(Face)마다 미세하게 다른 단색을 채워 빛에 의한 명암을 표현하라(Flat Shading).

색상 및 조명:
부드럽고 따뜻한 파스텔 톤이나 밝고 산뜻한 색상을 사용하여 장난감 같은 느낌을 주어라.
그림자는 날카롭지 않고 부드럽게 떨어지게 하여 기분 좋은 날씨의 야외 같은 조명을 연출하라.

이미지 묘사 가이드:
style: low poly 3D rendering, isometric projection
shapes: geometric, angular, polygonal mesh, faceted
technique: flat shading, no textures, soft gradients lighting
colors: vibrant, playful, clean
vibe: miniature, digital, simplistic, clear`
  },
  {
    id: "minimalist-dark",
    title: "Luxury Dark Minimal",
    description: "극한의 단순함을 추구하는 고급스러운 다크 모드",
    image: "/thumbnails/minimalist-dark.png",
    prompt: `시각적 언어 (여백과 고급스러움):
완벽한 블랙(#000000) 또는 아주 깊은 차콜 그레이를 배경으로 사용하여 몰입감을 극대화하라.
장식적인 요소를 모두 제거하고, 오직 필수적인 정보만을 화면 중앙에 배치하라. 극단적인 여백(Negative space)을 그 자체로 디자인 요소로 활용하라.
이미지는 흑백 사진이나 채도를 낮춘 사진을 사용하여 차분한 톤을 유지하라.

색상 및 서체:
텍스트는 순수한 흰색이나 은은한 회색을 사용하라. 포인트 컬러는 골드(Gold)나 실버(Silver) 같은 메탈릭한 색상을 아주 얇은 선이나 작은 점으로만 사용하라.
서체는 획이 매우 얇은(Light/Thin weight) 우아한 산세리프 또는 모던 세리프 폰트를 사용하여 세련미를 강조하라.

이미지 묘사 가이드:
style: high-end luxury minimalism, modern dark mode UI
composition: plenty of negative space, centered, balanced
colors: matte black, charcoal, silver, gold accents, white text
vibe: sophisticated, elegant, exclusive, premium, silent
details: fine lines, subtle gradients, high contrast photography`
  },
  {
    id: "risograph",
    title: "Risograph Print",
    description: "리소그라프 인쇄 특유의 질감과 색감을 살린 빈티지 스타일",
    image: "/thumbnails/risograph.png",
    prompt: `시각적 언어 (인쇄의 맛):
리소그라프 인쇄기에서 갓 나온 듯한 거친 종이 질감과 독특한 잉크 질감(Grain)을 표현하라.
색상이 겹치는 부분은 잉크가 섞이는 오버프린트(Overprint) 효과를 적용하고, 핀이 살짝 어긋난 듯한(Misregistration) 느낌을 주어 아날로그적인 매력을 더하라.
이미지는 하프톤(Halftone) 망점이나 거친 노이즈 텍스처로 처리하라.

색상:
리소그라프 특유의 제한된 잉크 색상(형광 핑크, 밝은 파랑, 노랑, 검정 등)을 조합하여 빈티지하면서도 힙한 색감을 만들어라.
배경은 갱지나 미색 종이 색상을 사용하라.

이미지 묘사 가이드:
style: risograph printing, zine aesthetic
texture: grainy ink, rough paper, halftone patterns
technique: color layering, overprinting, slight misalignment
colors: fluorescent pink, blue, yellow, hunter green
vibe: vintage, indie, handmade, textured, vibrant`
  },
  {
    id: "origami",
    title: "Origami World",
    description: "종이를 접어 만든 기하학적인 오리가미 스타일",
    image: "/thumbnails/origami.png",
    prompt: `시각적 언어 (면과 주름):
모든 캐릭터와 요소가 한 장의 종이를 접어서(Folding) 만든 오리가미 형태로 표현되어야 한다.
종이가 접힌 날카로운 모서리(Crease)와 접합면을 명확하게 보여주어라.
종이의 두께감이나 빳빳한 질감을 빛 반사를 통해 표현하라.

색상 및 조명:
흰색 배경 위에서 색종이의 선명한 색감이 돋보이게 하라.
강한 빛을 비추어 종이 접힌 부분의 그림자가 뚜렷하게 지게 하여 입체감을 극대화하라.

콘텐츠 구조:
정보가 담긴 박스도 종이가 접히거나 펼쳐지는 형태로 디자인하라.

이미지 묘사 가이드:
style: origami art, paper folding style
materials: crisp paper, cardstock
shapes: geometric, angular, faceted, folded
lighting: sharp shadows, studio lighting
vibe: delicate, precise, creative, structured
colors: bright primary colors on clean background`
  }
];
