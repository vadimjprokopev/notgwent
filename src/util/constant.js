export const Event = {
	CARD_STATE_UPDATED: 'cardStateUpdated',
	SAVE_CARD_AS_IMAGE: 'saveCardAsImage',
	DELETE_FROM_LIBRARY: 'deleteFromLibrary',
	SELECT_ALL_LIBRARY: 'selectAllLibrary',
	UNSELECT_ALL_LIBRARY: 'unselectAllLibrary',
	ENABLE_LIBRARY_SELECTION: 'enableLibrarySelection',
	CANCEL_LIBRARY_SELECTION: 'cancelLibrarySelection',
	TOGGLE_SIDEBAR: 'toggleSidebar'
}

export const Color = {
	DEFAULT_CARD_TEXT: '#CCCCCC'
}

export const Type = {
	PRIME: 'prime',
	ACTION: 'action',
	PATH: 'path',
	STATE: 'state',
	RELEASE: 'release',

	LEADER: 'leader',
	HERO: 'hero',
	PAWN: 'pawn'
}

export const PathType = {
	NORMAL: 'normal',
	FORK: 'fork'
}

export const Element = {
	GENERIC: 'generic',
	DAMAGE: 'damage',
	HEALING: 'healing',
	ALTERATION: 'alteration',
	SUMMONING: 'summoning',
	CONTROL: 'control',
	SACRIFICE: 'sacrifice'
}

export const Tribe = {
	NONE: 'none',
	BESTIAL: 'bestial',
	DRACONIC: 'draconic'
}

export const ImportMethod = {
	APPEND: 'append',
	REPLACE: 'replace'
}

export const AttackType = {
	NORMAL: 'normal',
	HEALING: 'healing'
}

export const LibraryFileState = {
	NOT_SELECTED: 'not_selected',
	LOADING: 'loading',
	PARSED: 'parsed',
	INVALID: 'invalid'
}

export const DisplayedBudgetLabel = {
	ATTACK_COST: 'attack_cost',
	HEALTH_COST: 'health_cost',
	TRIBE_COST: 'tribe_cost',
	DESCRIPTION: 'description',
	TOTAL: 'total'
}
