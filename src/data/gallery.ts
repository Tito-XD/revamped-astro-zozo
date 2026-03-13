import type { ImageMetadata } from 'astro';

import titoCafeManager from '~/assets/tito_xd-cafe-manager-by-frankuwu.png';
import titoCoffeeMaster from '~/assets/tito_xd-coffee-master-by-frankuwu.png';
import titoWalk from '~/assets/tito_xd-walk-by-frankuwu.png';
import together1000 from '~/content/attachments/1000-days/together-1000-days-revamped.png';
import shanghaiView from '~/content/attachments/REWIND-2024/shanghai-2024.png';
import viewWindow from '~/content/attachments/REWIND-2025/10.4_view.png';
import togetherMay from '~/content/attachments/REWIND-2025/25.05.01-together.jpg';
import combinationByKompass from '~/content/attachments/REWIND-2025/combination_by_kompass.png';
import happyFour from '~/content/attachments/REWIND-2025/happy_four.jpg';
import highschoolByTuosi from '~/content/attachments/REWIND-2025/highschool_by_tuosi.jpg';
import rainyNightWalk from '~/content/attachments/REWIND-2025/rainy-night-walk.jpeg';

export type GalleryCategorySlug = 'illustration' | 'life' | 'view';

export interface GalleryCategory {
	slug: GalleryCategorySlug;
	title: string;
	subtitle: string;
	description: string;
}

export interface GalleryFocusCharacter {
	id: string;
	name: string;
	role: string;
	note: string;
	portrait: ImageMetadata;
	x: number;
	y: number;
	width: number;
	height: number;
	accent: string;
}

export interface GalleryItem {
	slug: string;
	category: GalleryCategorySlug;
	title: string;
	alt: string;
	image: ImageMetadata;
	eyebrow: string;
	summary: string;
	notes: string[];
	credit?: string;
	location?: string;
	year?: string;
	focusCharacters?: GalleryFocusCharacter[];
}

export const galleryCategories: GalleryCategory[] = [
	{
		slug: 'illustration',
		title: 'Illustration',
		subtitle: '委托插图',
		description: '放委托、OC 组合图和自己想单独展开讲讲的作品。',
	},
	{
		slug: 'life',
		title: 'Life',
		subtitle: '生活碎片',
		description: '和朋友一起留下来的小片段，适合写几句当时的故事。',
	},
	{
		slug: 'view',
		title: 'View',
		subtitle: '所见',
		description: '路上看到的光、风景和某些不想忘记的画面。',
	},
];

export const galleryItems: GalleryItem[] = [
	{
		slug: 'oc-ensemble-demo',
		category: 'illustration',
		title: 'OC Ensemble Demo',
		alt: 'A commissioned ensemble illustration used to demo character highlighting.',
		image: titoCafeManager,
		eyebrow: 'Illustration / Character Focus',
		summary: '一张先用来验证交互效果的组合插图页面，支持 hover 和 click 高亮人物。',
		credit: 'Art demo with existing local assets',
		year: '2026',
		notes: [
			'这个条目主要是给 /gallery 的插图定制页打样，所以先用仓库里的现有插图素材做结构验证。',
			'右侧 notes 区块和下方角色列表都预留好了，后面替换成真正的委托图与人物信息即可。',
		],
		focusCharacters: [
			{
				id: 'character-01',
				name: 'Character 01',
				role: 'Front bar',
				note: '用于演示 hover 和 click 后的局部高亮。',
				portrait: titoCoffeeMaster,
				x: 9,
				y: 17,
				width: 18,
				height: 56,
				accent: '#f59e0b',
			},
			{
				id: 'character-02',
				name: 'Character 02',
				role: 'Center lead',
				note: '主视觉中的第二位角色，点击后会保持高亮状态。',
				portrait: titoWalk,
				x: 27,
				y: 12,
				width: 16,
				height: 60,
				accent: '#fb7185',
			},
			{
				id: 'character-03',
				name: 'Character 03',
				role: 'Calm support',
				note: '这里示意第三位角色的独立立绘与组合图联动。',
				portrait: combinationByKompass,
				x: 43,
				y: 16,
				width: 15,
				height: 57,
				accent: '#38bdf8',
			},
			{
				id: 'character-04',
				name: 'Character 04',
				role: 'Backlight',
				note: '适合后续补角色设定、服装稿或委托备注。',
				portrait: highschoolByTuosi,
				x: 58,
				y: 14,
				width: 14,
				height: 58,
				accent: '#34d399',
			},
			{
				id: 'character-05',
				name: 'Character 05',
				role: 'Anchor',
				note: '第五位角色占位，后续可以替换成真实立绘或表情差分。',
				portrait: titoCafeManager,
				x: 72,
				y: 18,
				width: 17,
				height: 54,
				accent: '#a78bfa',
			},
		],
	},
	{
		slug: 'coffee-master',
		category: 'illustration',
		title: 'Coffee Master',
		alt: 'An illustration portrait titled Coffee Master.',
		image: titoCoffeeMaster,
		eyebrow: 'Illustration / Commission',
		summary: '适合单张展示的角色立绘页，也可以单独写委托背景和设定。',
		credit: 'Illustration by Frankuwu',
		year: '2025',
		notes: [
			'这类单张立绘会直接走相册查看页，不强制要做角色热点交互。',
			'如果后续某张图也需要局部高亮，只要在数据里补上 focusCharacters 就能复用同一套页面。',
		],
	},
	{
		slug: 'night-walk',
		category: 'illustration',
		title: 'Night Walk',
		alt: 'A walk-themed illustration.',
		image: titoWalk,
		eyebrow: 'Illustration / Personal Favorite',
		summary: '偏氛围向的插图，适合记录某次特别满意的约稿或者自存版本。',
		credit: 'Illustration by Frankuwu',
		year: '2025',
		notes: ['这里是普通相册流转示例，没有额外的交互定制。'],
	},
	{
		slug: 'a-thousand-days',
		category: 'life',
		title: 'A Thousand Days',
		alt: 'A commemorative image about one thousand days together.',
		image: together1000,
		eyebrow: 'Life / Memory',
		summary: '比较适合写一段完整 notes 的纪念画面。',
		location: 'Archive memory',
		year: '2025',
		notes: [
			'这类页面会更像小相册，右侧 notes 区块用来写时间、地点和当时想记住的话。',
			'你后面可以把 notes 写成长一点，也可以只保留一两句。',
		],
	},
	{
		slug: 'may-together',
		category: 'life',
		title: 'May Together',
		alt: 'A casual photo together in May.',
		image: togetherMay,
		eyebrow: 'Life / Snapshot',
		summary: '生活碎片可以用比较轻的方式去写，不需要每张都很正式。',
		location: 'May, with friends',
		year: '2025',
		notes: ['有些照片只是想留住一瞬间，这种时候一小段 notes 就足够。'],
	},
	{
		slug: 'happy-four',
		category: 'life',
		title: 'Happy Four',
		alt: 'A happy group photo.',
		image: happyFour,
		eyebrow: 'Life / Group',
		summary: '适合做朋友相关的照片收藏，也方便以后继续扩充到更多相册。',
		location: 'With friends',
		year: '2025',
		notes: ['如果以后想加更多生活照，这个分类会自然长成一个连续的图片墙。'],
	},
	{
		slug: 'window-view',
		category: 'view',
		title: 'Window View',
		alt: 'A city or travel view seen through a window.',
		image: viewWindow,
		eyebrow: 'View / Passing Scene',
		summary: '适合放那些不是旅行大片，但就是想记住的瞬间。',
		location: 'On the road',
		year: '2025',
		notes: ['View 分类会偏向你在路上看到的画面，适合很轻地记录光线和当下感受。'],
	},
	{
		slug: 'shanghai-light',
		category: 'view',
		title: 'Shanghai Light',
		alt: 'A Shanghai city view.',
		image: shanghaiView,
		eyebrow: 'View / City',
		summary: '城市和景的图更适合用横向矩形卡片来吃满一整行。',
		location: 'Shanghai',
		year: '2024',
		notes: ['当 View 页面逐渐变多时，这种横向比例会更像一个连续展开的观察笔记。'],
	},
	{
		slug: 'rainy-night',
		category: 'view',
		title: 'Rainy Night',
		alt: 'A rainy night street view.',
		image: rainyNightWalk,
		eyebrow: 'View / Night',
		summary: '夜里的街景、路灯和雨水，很适合放进带 notes 的相册页。',
		location: 'Night walk',
		year: '2025',
		notes: ['右侧 notes 可以专门留给这些不太适合发成长文、但又想留下来的画面。'],
	},
];

export const getGalleryCategory = (slug: string) =>
	galleryCategories.find((category) => category.slug === slug);

export const getGalleryItemsByCategory = (slug: GalleryCategorySlug) =>
	galleryItems.filter((item) => item.category === slug);

export const getGalleryItem = (category: string, slug: string) =>
	galleryItems.find((item) => item.category === category && item.slug === slug);
