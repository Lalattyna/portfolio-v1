import { json } from '@sveltejs/kit';
import fs from 'fs/promises';
import path from 'path';

export const GET = async () => {
	try {
		const filePath = path.resolve('src/content/skills.json');
		const fileData = await fs.readFile(filePath, 'utf-8');
		const skills = JSON.parse(fileData);
		return json(skills, { status: 200 });
	} catch (error) {
		if (error instanceof Error) {
			console.error('Error message:', error.message);
			return json({ message: 'Failed to load skills data', error: error.message }, { status: 500 });
		} else {
			console.error('Caught unexpected error', error);
			return { error: 'An unexpected error occurred' };
		}
	}
};
