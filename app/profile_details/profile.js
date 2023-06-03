// import React from "react";

import { 
    Text, View, SafeAreaView, Image, ScrollView, ActivityIndicator, RefreshControl, Share
} from 'react-native';

import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useState } from 'react';

//importing other components 
import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from "../../components";
import useFetch from "../../hook/useFetch";
import { COLORS, icons, SIZES, images } from '../../constants';
import styles from "../../components/jobdetails/company/company.style";

// const tabs = ["About", "Qualifications", "Responsibilities"];
const name = "Someshwar Tripathi";
const location = "Remote";
const companyName = "Looking";
const ProfileDetails = () => {
    // const params = useSearchParams();
    const router = useRouter();

    // const {data, isLoading, error, refetch } = useFetch('job-details', {
    //     job_id: params.id
    // })

    // const [ refreshing, setRefreshing ] = useState(false);
    // const [ activeTab, setActiveTab ] = useState(tabs[0]);

    // const onRefresh = useCallback(() => {
    //     setRefreshing(true);
    //     refetch();
    //     setRefreshing(false);
    // })

    // const displayTabContent = () => {
    //     switch (activeTab) {
    //         case "Qualifications":
    //             return <Specifics 
    //                 title="Qualifications" 
    //                 points={data[0].job_highlights?.Qualifications ?? ['N/A']} 
    //             />
    //         case "About":
    //             return <JobAbout
    //                 info={data[0].job_description ?? "No data provided"}
    //             />
    //         case "Responsibilities":
    //             return <Specifics
    //                 title="Responsibilities"
    //                 points={data[0].job_highlights?.Responsibilities ?? ['N/A']}
    //             />
    //         default: break;
    //     }
    // }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}
        >
            <Stack.Screen options={{
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerBackVisible: false,
                headerLeft: () => (
                <ScreenHeaderBtn
                        iconUrl={icons.left}
                        dimension="60%"
                        handlePress={() => router.back()}
                />
                ),
                headerTitle: ''
                }}
            />

            <View style={styles.container}>
                <View style={styles.logoBox}>
                    <ScreenHeaderBtn
                        iconUrl={images.profile}
                        dimension="200%"
                        // handlePress={() => {
                        //     router.push(`/profile_details/profile`);
                        // }}
                    />

                    {/* <Image
                        source={images.profile}
                        style={styles.logoImage}
                        resizeMode="cover"
                    /> */}
                </View>

                <View style={styles.jobTitleBox}>
                    <Text style={styles.jobTitle}>{name}</Text>
                </View>

                <View style={styles.companyInfoBox}>
                    <Text style={styles.companyName}>{companyName} / </Text>
                    
                    <View style={styles.locationBox}>
                        <Image
                            source={icons.location}
                            resizeMode="contain"
                            style={styles.locationImage}
                        />
                        <Text style={styles.locationName}>{location}</Text>
                    </View>
                </View> 
            </View>
        </SafeAreaView>
    )
}

export default ProfileDetails;