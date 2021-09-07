import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#121016',
    },

    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },

    input: {
        backgroundColor: '#1f1e25',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'android' ? 10 : 16,
        marginTop: 30,
        borderRadius: 5,
    },

    mySkillsTitle: {
        flexDirection: 'row',
        paddingVertical: 20,
    },

    mySkillsLength: {
        color: '#fff',
        fontSize: 18,
        paddingVertical: 4,
        marginLeft: 8,
    },

    mySkillsList: {
        width: '100%',
        height: '100%',
    },

    buttonSkill: {
        backgroundColor: '#1f1e25',
        padding: 16,
        borderRadius: 8,
    },

    textSkill: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    },
});
