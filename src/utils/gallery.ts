import { type CollectionEntry, getCollection } from 'astro:content';
import type { GalleryCategorySlug } from '~/content.config';

export interface GalleryCategoryMeta {
	slug: GalleryCategorySlug;
	title: string;
	subtitle: string;
	description: string;
}

export type GalleryEntry = CollectionEntry<'gallery'>;

export const galleryCategories: GalleryCategoryMeta[] = [
	{
		slug: 'illustration',
		title: 'Illustration',
		subtitle: '委托插图',
		description: '收纳委托、设定图和需要单独拆分人物高亮的作品。',
	},
	{
		slug: 'life',
		title: 'Life',
		subtitle: '生活碎片',
		description: '记录和朋友、日常与纪念时刻有关的画面，也保留一点当时的心情。',
	},
	{
		slug: 'view',
		title: 'View',
		subtitle: '所见',
		description: '留给路上的光线、城市、天气和那些想悄悄记住的风景。',
	},
];

const collator = new Intl.Collator(['zh-Hans-u-co-pinyin', 'zh', 'en'], {
	numeric: true,
	sensitivity: 'base',
});

const bySortOrder = (left: GalleryEntry, right: GalleryEntry) =>
	left.data.sortOrder - right.data.sortOrder ||
	collator.compare(left.data.title, right.data.title);

export const getGalleryCategory = (slug: string) =>
	galleryCategories.find((category) => category.slug === slug);

export const getGalleryEntries = async () => {
	const entries = await getCollection('gallery');
	return [...entries].sort(bySortOrder);
};

export const getGalleryItemsByCategory = async (
	slug: GalleryCategorySlug | string,
) => {
	const entries = await getGalleryEntries();
	return entries.filter((entry) => entry.data.category === slug);
};

export const getGalleryItem = async (
	category: GalleryCategorySlug | string,
	slug: string,
) => {
	const entries = await getGalleryItemsByCategory(category);
	return entries.find((entry) => entry.data.slug === slug);
};
